import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const paymentsOrigins: TeamOrigins = {
  team: TeamValue.Payments,
  origins: [
    {
      behaviorPathPattern: 'payments/manage-saved-payment-methods*',
      s3OriginPath: '/payments/manage-saved-payment-methods',
      bucketPrefix: 'payments-web',
      accountDetails: AccountIds.payments
    },
    {
      behaviorPathPattern: 'payments/*',
      s3OriginPath: '/payments',
      bucketPrefix: 'payments-web',
      accountDetails: AccountIds.payments
    },
    {
      behaviorPathPattern: 'autopayconsent/*',
      s3OriginPath: '/autopayconsent',
      bucketPrefix: 'payments-web',
      accountDetails: AccountIds.payments
    },
    {
      behaviorPathPattern: 'autopay/*',
      s3OriginPath: '/autopay',
      bucketPrefix: 'payments-web',
      accountDetails: AccountIds.payments
    }
  ]
};
