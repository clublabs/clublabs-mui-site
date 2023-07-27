#!/usr/bin/env node
import { AccountIds } from '@clublabs/account-profiles';
import * as tag from '@clublabs/aws-tags';
import { EnvironmentValue } from '@clublabs/aws-tags';
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { CFOriginConfig, WebDistributionStack } from '../lib/web-distribution-stack';
import { constants } from './constants';
import { EnvSpecificOrigin, IOrigins, StandardPatternOrigin } from './origins';
import * as TeamOrigins from './team-origins';
import { Helper, Regions } from '@clublabs/aws-cdk-codepipeline';

const app = new cdk.App();
const stackName = 'web-distribution-stack';
const tags = {
  [tag.TaggingKey.Region]: tag.RegionValue.USEast1,
  [tag.TaggingKey.Workload]: tag.WorkloadValue.EdgeRouting,
  [tag.TaggingKey.Team]: tag.TeamValue.CloudEnablement,
  [tag.TaggingKey.DataProfile]: tag.DataProfileValue.Internal,
  [tag.TaggingKey.Department]: tag.DepartmentValue.Ebiz
};

[
  EnvironmentValue.Dev,
  EnvironmentValue.Qa,
  EnvironmentValue.Uat,
  // EnvironmentValue.Stage,
  EnvironmentValue.Prod
].forEach((environment) => {
  new WebDistributionStack(app, `web-distribution-${environment}-us-east-1`, {
    env: {
      account: (AccountIds.routing as any)[environment],
      region: 'us-east-1'
    },
    stackName,
    environment,
    originGroups: Object.values(TeamOrigins).map((x) => {
      return {
        team: x.team,
        origins: getConfigs(x.origins, environment)
      };
    }),
    tags: {
      [tag.TaggingKey.Region]: tag.RegionValue.USEast1,
      [tag.TaggingKey.Environment]: environment,
      [tag.TaggingKey.Workload]: tag.WorkloadValue.EdgeRouting,
      [tag.TaggingKey.Team]: tag.TeamValue.CloudEnablement,
      [tag.TaggingKey.DataProfile]: tag.DataProfileValue.Internal,
      [tag.TaggingKey.Department]: tag.DepartmentValue.Ebiz
    },
    originAccessIdentity: (constants as any)[environment].originAccessIdentity,
    certificateId: (constants as any)[environment].certificateId,
    hostedZoneId: (constants as any)[environment].hostedZoneId,
    synthesizer: Helper.AceSynthesizer('routing', Regions.USEast1)
  });
});

function getConfigs(origins: IOrigins[], env: EnvironmentValue): CFOriginConfig[] {
  let orgs: CFOriginConfig[] = [];
  origins!.forEach((origin) => {
    //has env specific entries
    if (isEnvSpecificOrigin(origin)) {
      //check if it has the env, else skip
      if ((origin as any)[env]) {
        const envSpecficOrigin: EnvSpecificOrigin = (origin as any)[env];
        envSpecficOrigin.behaviors.forEach(behavior => {
          orgs.push({
            behaviorPathPattern: behavior.behaviorPathPattern,
            s3Origin: {
              originPath: behavior.s3OriginPath,
              bucketAccountId: envSpecficOrigin.bucketAccountId,
              bucketName: envSpecficOrigin.bucketName ?? `${envSpecficOrigin.bucketPrefix}-${env}-us-west-2`
            }
          });
        })
      }
      //follows standard pattern
    } else if ((origin as StandardPatternOrigin).accountDetails[env]) {
      orgs.push({
        behaviorPathPattern: (origin as StandardPatternOrigin).behaviorPathPattern,
        s3Origin: {
          originPath: (origin as StandardPatternOrigin).s3OriginPath,
          bucketAccountId: (origin as StandardPatternOrigin).accountDetails[env]!,
          bucketName: `${(origin as StandardPatternOrigin).bucketPrefix}-${env}-us-west-2`
        }
      });
    }
  });
  return orgs;
}

export function isEnvSpecificOrigin(origin: IOrigins): boolean {
  let result = false;
  Object.keys(origin).forEach(key => {
    if ((Object.values(EnvironmentValue) as string[]).includes(key)) {
      result= true;
    }
  });
return result;  
}
