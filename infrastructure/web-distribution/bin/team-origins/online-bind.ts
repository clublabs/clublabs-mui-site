import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const olbOrigins: TeamOrigins = {
  team: TeamValue.OnlineBind,
  origins: [
    {
      behaviorPathPattern: 'insurance/quotes/shortform*',
      s3OriginPath: '/insurance/quotes/shortform',
      bucketPrefix: 'online-bind-app-web',
      accountDetails: AccountIds.onlinebind
    },
    {
      behaviorPathPattern: 'insurance/auto/legacy*',
      s3OriginPath: '/insurance/auto/legacy',
      bucketPrefix: 'online-bind-app-web',
      accountDetails: AccountIds.onlinebind
    },
    {
      behaviorPathPattern: 'insurance/auto/olb*',
      s3OriginPath: '/insurance/auto/olb',
      bucketPrefix: 'online-bind-app-web',
      accountDetails: AccountIds.onlinebind
    },
    {
      behaviorPathPattern: 'insurance/home/olb*',
      s3OriginPath: '/insurance/home/olb',
      bucketPrefix: 'online-bind-app-web',
      accountDetails: AccountIds.onlinebind
    },
    {
      behaviorPathPattern: 'insurance/condo/olb*',
      s3OriginPath: '/insurance/home/olb',
      bucketPrefix: 'online-bind-app-web',
      accountDetails: AccountIds.onlinebind
    }
  ]
};
