import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const issOrigins: TeamOrigins = {
  team: TeamValue.InsuranceSelfService,
  origins: [
    {
      behaviorPathPattern: 'insurance/claims/summary*',
      s3OriginPath: '/insurance/claims/summary',
      bucketPrefix: 'insurance-claims-web',
      accountDetails: AccountIds.insuranceclaims
    },
    {
      behaviorPathPattern: 'insurance/auto/efnol*',
      s3OriginPath: '/insurance/auto/efnol',
      bucketPrefix: 'insurance-claims-web',
      accountDetails: AccountIds.insuranceclaims
    },
    {
      behaviorPathPattern: 'insurance/home/efnol*',
      s3OriginPath: '/insurance/home/efnol',
      bucketPrefix: 'insurance-claims-web',
      accountDetails: AccountIds.insuranceclaims
    },
    {
      behaviorPathPattern: 'insurance/policyview*',
      s3OriginPath: '/insurance/policyview',
      bucketPrefix: 'insurance-policy-info-web',
      accountDetails: AccountIds.insurancepolicyinfo
    },
    {
      behaviorPathPattern: 'insurance/make-a-payment/*',
      s3OriginPath: '/insurance/make-a-payment',
      bucketPrefix: 'insurance-policy-payment-web',
      accountDetails: AccountIds.insurancepolicypayment
    },
    {
      behaviorPathPattern: 'insurance/autopay-enrollment/*',
      s3OriginPath: '/insurance/autopay-enrollment',
      bucketPrefix: 'insurance-policy-payment-web',
      accountDetails: AccountIds.insurancepolicypayment
    },
    {
      behaviorPathPattern: 'insurance/monthly-payment-plan/*',
      s3OriginPath: '/insurance/monthly-payment-plan',
      bucketPrefix: 'insurance-policy-payment-web',
      accountDetails: AccountIds.insurancepolicypayment
    },
    {
      behaviorPathPattern: 'insurance/auto/coveragechange*',
      s3OriginPath: '/insurance/auto/coveragechange',
      bucketPrefix: 'insurancepolicychange-web',
      accountDetails: AccountIds.insurancepolicychange
    },
    {
      behaviorPathPattern: 'insurance/home/mortgage-change*',
      s3OriginPath: '/insurance/home/mortgage-change',
      bucketPrefix: 'insurancepolicychange-web',
      accountDetails: AccountIds.insurancepolicychange
    },
    {
      behaviorPathPattern: 'b2b/home/mortgagee-request*',
      s3OriginPath: '/b2b/home/mortgagee-request',
      bucketPrefix: 'insurance-policy-info-web',
      accountDetails: AccountIds.insurancepolicyinfo
    },
    {
      behaviorPathPattern: 'insurance/billingsummary*',
      s3OriginPath: '/insurance/billingsummary',
      bucketPrefix: 'insurance-policy-info-web',
      accountDetails: AccountIds.insurancepolicyinfo
    }
  ]
};
