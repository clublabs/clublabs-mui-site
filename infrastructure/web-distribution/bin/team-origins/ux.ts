import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const uxuiOrigins: TeamOrigins = {
  team: TeamValue.UX,
  origins: [
    {
      [EnvironmentValue.Dev]: {
        behaviors: [
          {
            behaviorPathPattern: 'design/storybook/*',
            s3OriginPath: '/design/storybook'
          }
        ],
        bucketAccountId: AccountIds.design.nonprod!,
        bucketName: 'design-web-dev-us-west-2'
      }
    },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [
          {
            behaviorPathPattern: 'design/scldemo/*',
            s3OriginPath: '/design/scldemo'
          }
        ],
        bucketAccountId: AccountIds.design.nonprod!,
        bucketName: 'design-web-dev-us-west-2'
      }
    },
    {
      [EnvironmentValue.Dev]: {
        behaviors: [
          {
            behaviorPathPattern: 'design/*',
            s3OriginPath: '/design'
          }
        ],
        bucketAccountId: AccountIds.design.nonprod!,
        bucketName: 'design-web-dev-us-west-2'
      }
    }
  ]
};
