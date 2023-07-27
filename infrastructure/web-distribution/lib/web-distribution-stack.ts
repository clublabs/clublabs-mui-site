import { EnvironmentValue } from '@clublabs/aws-tags';
import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { CustomOriginConfig, LambdaEdgeEventType, S3OriginConfig } from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';
import * as waf from 'aws-cdk-lib/aws-wafv2';
import { CfnParameter } from 'aws-cdk-lib';

export interface WebDistributionStackProps extends cdk.StackProps {
  environment: EnvironmentValue;
  certificateId: string;
  hostedZoneId: string;
}

export class WebDistributionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: WebDistributionStackProps) {
    super(scope, id, props);

    const currentAccount = cdk.Stack.of(this).account;
    const region = 'us-east-1';

    const environment = new CfnParameter(this, 'Environment', {
      description: 'Environment this lambda is being deployed to',
      allowedValues: ['dev', 'qa', 'uat', 'stage', 'prod']
    }).valueAsString;

    const originRequestFunction = new cloudfront.experimental.EdgeFunction(this, 'OriginRequestFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      functionName: 'web-distribution-origin-request',
      handler: 'index.handler',
      code: new TypeScriptCode('./lambdas/origin-request/src/index.ts', {
        buildOptions: {
          external: ['aws-sdk']
        }
      }),
      // logRetention creates a custom policy + lambda which we want to avoid
      // logRetention: RetentionDays.ONE_MONTH,
      memorySize: 256,
      timeout: cdk.Duration.seconds(5)
    });

    ///////////////////////
    // Default S3 Bucket //
    ///////////////////////

    //Empty bucket to use with Cloudfront's default behavior/origin
    const hostArtifactsBucket = new s3.Bucket(this, 'HostsArtifactsBucket', {
      bucketName: `${environment}-default-web-distribution-bucket`,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    hostArtifactsBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetObject*', 's3:PutObject*', 's3:PutObjectAcl*'],
        resources: [hostArtifactsBucket.bucketArn, `${hostArtifactsBucket.bucketArn}/*`],
        principals: [new iam.ArnPrincipal(`arn:aws:iam::${currentAccount}:root`)]
      })
    );

    /////////////////////////////
    // Team CloudFront Distributions //
    /////////////////////////////
    const accessOriginIdentity = cloudfront.OriginAccessIdentity.fromOriginAccessIdentityId(
      this,
      'AccessOriginIdentity',
      props.originAccessIdentity
    );

    const defaultOriginConfg = {
      //Default origin with default path /*
      s3OriginSource: {
        s3BucketSource: hostArtifactsBucket,
        originAccessIdentity: accessOriginIdentity
      },
      behaviors: [{ isDefaultBehavior: true }]
    };

    //create route53 records
    const zone = route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId: props.hostedZoneId,
      zoneName: `${environment}.clublabs.net`
    });

    const teamBehaviors: teamBehaviors[] = [];

    // {
    //   team: string;
    //   domainName: string;
    //   behaviors: []
    // }

    const cloudfrontIPRuleGroup = getCloudfrontRuleGroup(this, {
      currentRegion: region,
      environment
    });

    const workloadWafACL = new waf.CfnWebACL(this, 'WorkloadWafAcl', {
      defaultAction: {
        block: {}
      },
      name: 'workload-web-v2-cloudfront-acl',
      scope: 'CLOUDFRONT',
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudWatchMetricsEnabled: true,
        metricName: 'workload-web-v2-cloudfront-acl'
      },
      rules: [
        {
          name: 'proxy-cloudfront-whitelist-rulegroup-reference-rule',
          priority: 0,
          overrideAction: {
            none: {}
          },
          visibilityConfig: {
            sampledRequestsEnabled: true,
            cloudWatchMetricsEnabled: true,
            metricName: 'proxy-cloudfront-whitelist-rulegroup-reference-rule'
          },
          statement: {
            ruleGroupReferenceStatement: {
              arn: cloudfrontIPRuleGroup.attrArn
            }
          }
        }
      ]
    });

    props.originGroups.forEach((og) => {
      const { team, origins } = og;
      const domainName = `app-${team}.${environment}.clublabs.net`;
      const originConfigs: cloudfront.SourceConfiguration[] = [];
      //Application specific origins

      let behaviors: string[] = [];

      origins.forEach((origin) => {
        behaviors.push(origin.behaviorPathPattern);
        const sourceConfig = getSourceConfiguration(this, accessOriginIdentity, origin, originRequestFunction);
        originConfigs.push(sourceConfig);
      });

      const teamBehavior = { team, domainName, behaviors };

      teamBehaviors.push(teamBehavior);

      const cloudFrontDistribution = new cloudfront.CloudFrontWebDistribution(this, `${team}CloudFrontDistribution`, {
        viewerCertificate: {
          aliases: [domainName],
          props: {
            acmCertificateArn: `arn:aws:acm:us-east-1:${currentAccount}:certificate/${props.certificateId}`,
            sslSupportMethod: 'sni-only'
          }
        },
        comment: `Web distribution for ${team.toLocaleUpperCase()} applications`,
        originConfigs: [defaultOriginConfg, ...originConfigs],
        webACLId: workloadWafACL.attrArn
      });

      new route53.ARecord(this, `${team}WebDistributionRecord`, {
        zone,
        recordName: domainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(cloudFrontDistribution))
      });
    });

    // Create Central CloudFront Proxy Distribution
    const domainName = `app2.${environment}.clublabs.net`;

    const impervaIPRuleGroup = getImpervaIPRuleGroup(this, {
      currentRegion: region,
      environment
    });

    const wafACL = new waf.CfnWebACL(this, 'WafAcl', {
      defaultAction: {
        block: {}
      },
      name: 'centralized-web-v2-cloudfront-acl',
      scope: 'CLOUDFRONT',
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudWatchMetricsEnabled: true,
        metricName: 'centralized-web-v2-cloudfront-acl'
      },
      rules: [
        {
          name: 'imperva-whitelist-rulegroup-reference-rule-for-v2',
          priority: 0,
          overrideAction: {
            none: {}
          },
          visibilityConfig: {
            sampledRequestsEnabled: true,
            cloudWatchMetricsEnabled: true,
            metricName: 'imperva-whitelist-rulegroup-reference-rule-for-v2'
          },
          statement: {
            ruleGroupReferenceStatement: {
              arn: impervaIPRuleGroup.attrArn
            }
          }
        }
      ]
    });

    const cloudFrontDistribution = new cloudfront.CloudFrontWebDistribution(this, `CloudFrontDistribution`, {
      viewerCertificate: {
        aliases: [domainName],
        props: {
          acmCertificateArn: `arn:aws:acm:us-east-1:${currentAccount}:certificate/${props.certificateId}`,
          sslSupportMethod: 'sni-only'
        }
      },
      comment: `Centralized distribution for ACE web applications v2`,
      originConfigs: [defaultOriginConfg, ...getTeamProxySourceConfiguration(this, teamBehaviors)],
      webACLId: wafACL.attrArn
    });

    new route53.ARecord(this, `WebDistributionRecord`, {
      zone,
      recordName: domainName,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(cloudFrontDistribution))
    });
  }
}

function getSourceConfiguration(
  scope: Construct,
  oai: cloudfront.IOriginAccessIdentity,
  originConfig: CFOriginConfig,
  originRequest: cloudfront.experimental.EdgeFunction
): cloudfront.SourceConfiguration {
  const behavior: cloudfront.Behavior = {
    isDefaultBehavior: false,
    pathPattern: originConfig.behaviorPathPattern,
    lambdaFunctionAssociations: [
      {
        eventType: LambdaEdgeEventType.ORIGIN_REQUEST,
        lambdaFunction: originRequest.currentVersion
      }
    ]
  };

  // Main Origin
  const s3OriginConfig: S3OriginConfig = {
    //Have to do it this way instead of fromBucketArn because it uses current region when the domain name is not specified
    //https://github.com/aws/aws-cdk/issues/6055
    s3BucketSource: s3.Bucket.fromBucketAttributes(scope, `${originConfig.behaviorPathPattern}BucketSource`, {
      bucketArn: `arn:aws:s3:us-west-2:${originConfig.s3Origin.bucketAccountId}:${originConfig.s3Origin.bucketName}`,
      bucketRegionalDomainName: `${originConfig.s3Origin.bucketName}.s3.us-west-2.amazonaws.com`
    }),
    originAccessIdentity: oai,
    originPath: originConfig.s3Origin.originPath
  };
  const failOverBucketName = originConfig.s3Origin.bucketName.replace('us-west-2', 'us-east-1');

  const s3FailoverOriginConfig: S3OriginConfig = {
    s3BucketSource: s3.Bucket.fromBucketAttributes(scope, `${originConfig.behaviorPathPattern}FailoverBucketSource`, {
      bucketArn: `arn:aws:s3:us-east-1:${originConfig.s3Origin.bucketAccountId}:${failOverBucketName}`,
      bucketRegionalDomainName: `${failOverBucketName}.s3.us-east-1.amazonaws.com`
    }),
    originAccessIdentity: oai,
    originPath: originConfig.s3Origin.originPath
  };

  let sourceConfiguration: cloudfront.SourceConfiguration = {
    s3OriginSource: s3OriginConfig,
    failoverS3OriginSource: s3FailoverOriginConfig,
    behaviors: [behavior]
  };

  return sourceConfiguration!;
}

function getTeamProxySourceConfiguration(
  scope: Construct,
  teamBehaviors: teamBehaviors[]
): cloudfront.SourceConfiguration[] {
  return teamBehaviors.map((teamBehavior) => {
    const behaviors = teamBehavior.behaviors.map((behavior) => {
      return {
        isDefaultBehavior: false,
        pathPattern: behavior
      };
    });

    // Main Origin
    const teamProxy: CustomOriginConfig = {
      domainName: teamBehavior.domainName
    };

    let sourceConfiguration: cloudfront.SourceConfiguration = {
      customOriginSource: teamProxy,
      behaviors
    };

    return sourceConfiguration;
  });
}
