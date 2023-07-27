import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const enterpriseOrigins: TeamOrigins = {
  team: TeamValue.Enterprise,
  origins: [
    {
      behaviorPathPattern: 'myaccount*',
      s3OriginPath: '/myaccount',
      bucketPrefix: 'myaccount-web',
      accountDetails: AccountIds.myaccount
    },
    {
      behaviorPathPattern: 'recoverpassword/*',
      s3OriginPath: '/recoverpassword',
      bucketPrefix: 'password-recovery-web',
      accountDetails: AccountIds.accountrecovery
    },
    {
      behaviorPathPattern: 'change-username/*',
      s3OriginPath: '/change-username',
      bucketPrefix: 'account-recovery-web',
      accountDetails: AccountIds.accountrecovery
    },
    // {
    //   behaviorPathPattern: 'enterprise/identity/*',
    //   s3OriginPath: '/enterprise/identity',
    //   bucketPrefix: 'identity-web',
    //   accountDetails: AccountIds.identity
    // },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/identity/dev/*',
            s3OriginPath: '/enterprise/identity/dev'
          }
        ],
        bucketPrefix: 'identity-web',
        bucketAccountId: AccountIds.identity.dev
      },
      [EnvironmentValue.Qa]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/identity/qa/*',
            s3OriginPath: '/enterprise/identity/qa'
          }
        ],
        bucketPrefix: 'identity-web',
        bucketAccountId: AccountIds.identity.qa
      },
      [EnvironmentValue.Uat]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/identity/uat/*',
            s3OriginPath: '/enterprise/identity/uat'
          }
        ],
        bucketPrefix: 'identity-web',
        bucketAccountId: AccountIds.identity.uat
      },
      [EnvironmentValue.Prod]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/identity/*',
            s3OriginPath: '/enterprise/identity'
          }
        ],
        bucketPrefix: 'identity-web',
        bucketAccountId: AccountIds.identity.prod
      }
    },
    {
      behaviorPathPattern: 'enterprise/forms/*',
      s3OriginPath: '/enterprise/forms',
      bucketPrefix: 'clublabs-enterprise-web',
      accountDetails: AccountIds.enterprise
    },
    // {
    //   behaviorPathPattern: 'enterprise/cpa/*',
    //   s3OriginPath: '/enterprise/cpa',
    //   bucketPrefix: 'clublabs-enterprise-web',
    //   accountDetails: AccountIds.enterprise
    // },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/cpa/dev/*',
            s3OriginPath: '/enterprise/cpa/dev'
          }
        ],
        bucketPrefix: 'clublabs-enterprise-web',
        bucketAccountId: AccountIds.enterprise.dev
      },
      [EnvironmentValue.Qa]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/cpa/qa/*',
            s3OriginPath: '/enterprise/cpa/qa'
          }
        ],
        bucketPrefix: 'clublabs-enterprise-web',
        bucketAccountId: AccountIds.enterprise.qa
      },
      [EnvironmentValue.Uat]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/cpa/uat/*',
            s3OriginPath: '/enterprise/cpa/uat'
          }
        ],
        bucketPrefix: 'clublabs-enterprise-web',
        bucketAccountId: AccountIds.enterprise.uat
      },
      [EnvironmentValue.Prod]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/cpa/*',
            s3OriginPath: '/enterprise/cpa'
          }
        ],
        bucketPrefix: 'clublabs-enterprise-web',
        bucketAccountId: AccountIds.enterprise.prod
      }
    },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [
          {
            behaviorPathPattern: 'enterprise/sample-app-web/dev/*',
            s3OriginPath: '/enterprise/sample-app-web/dev'
          }
        ],
        bucketPrefix: 'clublabs-enterprise-web',
        bucketAccountId: AccountIds.enterprise.dev
      }
    },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [
          {
            behaviorPathPattern: 'pkce*',
            s3OriginPath: '/pkce'
          }
        ],
        bucketAccountId: AccountIds.accountrecovery.dev,
        bucketName: 'pkce-sample-web-dev-us-west-2'
      },
      [EnvironmentValue.Qa]: {
        behaviors: [
          {
            behaviorPathPattern: 'pkce*',
            s3OriginPath: '/pkce'
          }
        ],
        bucketAccountId: AccountIds.accountrecovery.qa,
        bucketName: 'pkce-sample-web-qa-us-west-2'
      }
    }
  ]
};
