import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const mobileOrigins: TeamOrigins = {
  team: TeamValue.Mobile,
  origins: [
    // {
    //   behaviorPathPattern: 'mobile/ios/*',
    //   s3OriginPath: '/mobile/ios',
    //   bucketPrefix: 'ace-ios-builds',
    //   accountDetails: AccountIds.cicd,
    //   s3Config: {
    //     [EnvironmentValue.Dev]: {
    //       bucketAccountId: AccountIds.cicd.nonprod!,
    //       bucketName: 'ace-ios-builds'
    //     },
    //     [EnvironmentValue.Prod]: {
    //       bucketAccountId: AccountIds.cicd.nonprod!,
    //       bucketName: 'ace-ios-builds'
    //     }
    //   }
    // },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [{
          behaviorPathPattern: 'mobile/ios/*',
          s3OriginPath: '/mobile/ios',
        }],
        bucketAccountId: AccountIds.cicd.nonprod!,
        bucketName: 'ace-ios-builds'
      },
      [EnvironmentValue.Prod]: {
        behaviors: [{
          behaviorPathPattern: 'mobile/ios/*',
          s3OriginPath: '/mobile/ios',
        }],
        bucketAccountId: AccountIds.cicd.nonprod!,
        bucketName: 'ace-ios-builds'
      }
    },
    // {
    //   behaviorPathPattern: 'mobile/android/*',
    //   s3OriginPath: '/mobile/android',
    //   bucketPrefix: 'ace-android-builds',
    //   accountDetails: AccountIds.cicd,
    //   s3Config: {
    //     [EnvironmentValue.Dev]: {
    //       bucketAccountId: AccountIds.cicd.nonprod!,
    //       bucketName: 'ace-android-builds'
    //     },
    //     [EnvironmentValue.Prod]: {
    //       bucketAccountId: AccountIds.cicd.nonprod!,
    //       bucketName: 'ace-android-builds'
    //     }
    //   }
    // },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [{
          behaviorPathPattern: 'mobile/android/*',
          s3OriginPath: '/mobile/android',
        }],
        bucketAccountId: AccountIds.cicd.nonprod!,
        bucketName: 'ace-android-builds'
      },
      [EnvironmentValue.Prod]: {
        behaviors: [{
          behaviorPathPattern: 'mobile/android/*',
          s3OriginPath: '/mobile/android',
        }],
        bucketAccountId: AccountIds.cicd.nonprod!,
        bucketName: 'ace-android-builds'
      }
    }
  ]
};
