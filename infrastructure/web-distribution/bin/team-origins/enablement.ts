import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const enablementOrigins: TeamOrigins = {
  team: TeamValue.CloudEnablement,
  origins: [
    // {
    //   behaviorPathPattern: 'log-cannon/*',
    //   s3OriginPath: '/log-cannon',
    //   bucketPrefix: 'logging-web',
    //   accountDetails: AccountIds.logging,
    //   s3Config: {
    //     [EnvironmentValue.Uat]: {
    //       bucketAccountId: AccountIds.logging.nonprod!,
    //       bucketName: 'logging-web-nonprod-us-west-2'
    //     },
    //     [EnvironmentValue.Prod]: {
    //       bucketAccountId: AccountIds.logging.prod,
    //       bucketName: 'logging-web-prod-us-west-2'
    //     }
    //   }
    // },
    {
      [EnvironmentValue.Uat]: {
        behaviors: [{
          behaviorPathPattern: 'log-cannon/*',
          s3OriginPath: '/log-cannon',
        }],
        bucketName: 'logging-web-nonprod-us-west-2',
        bucketAccountId: AccountIds.logging.nonprod!
      },
      [EnvironmentValue.Prod]: {
        behaviors: [{
          behaviorPathPattern: 'log-cannon/*',
          s3OriginPath: '/log-cannon',
        }],
        bucketAccountId: AccountIds.logging.prod,
        bucketName: 'logging-web-prod-us-west-2'
      }
    }
  ]
};
