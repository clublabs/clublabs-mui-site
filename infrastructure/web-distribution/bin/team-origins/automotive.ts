import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const automotiveOrigins: TeamOrigins = {
  team: TeamValue.Automotive,
  origins: [
    {
      behaviorPathPattern: 'aar*',
      s3OriginPath: '/aar',
      bucketPrefix: 'ers-chatbot-web',
      accountDetails: AccountIds.erschatbot
    },
    {
      behaviorPathPattern: 'erschatbot*',
      s3OriginPath: '/erschatbot',
      bucketPrefix: 'ers-chatbot-web',
      accountDetails: AccountIds.erschatbot
    }
  ]
};
