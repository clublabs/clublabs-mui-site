import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const websiteOrigins: TeamOrigins = {
  team: TeamValue.Website,
  origins: [
    {
      behaviorPathPattern: 'ziprouter/*',
      s3OriginPath: '/ziprouter',
      bucketPrefix: 'zip-router-web',
      accountDetails: AccountIds.ziprouter
    }
  ]
};
