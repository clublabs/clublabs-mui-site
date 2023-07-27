import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const membershipOrigins: TeamOrigins = {
  team: TeamValue.Membership,
  origins: [
    {
      behaviorPathPattern: 'quickupgrade/*',
      s3OriginPath: '/quickupgrade',
      bucketPrefix: 'one-click-upgrade-app-web',
      accountDetails: AccountIds.membershipupgrades
    },
    {
      behaviorPathPattern: 'membership/make-a-payment/*',
      s3OriginPath: '/membership/make-a-payment',
      bucketPrefix: 'membership-management-web',
      accountDetails: AccountIds.membershipupgrades
    },
    {
      behaviorPathPattern: 'membership/offer*',
      s3OriginPath: '/membership/offer',
      bucketPrefix: 'membership-management-web',
      accountDetails: AccountIds.membershipupgrades
    },
    {
      behaviorPathPattern: 'membership/join*',
      s3OriginPath: '/membership/join',
      bucketPrefix: 'membership-management-web',
      accountDetails: AccountIds.membershipupgrades
    },
    {
      behaviorPathPattern: 'membership/windshield*',
      s3OriginPath: '/membership/windshield',
      bucketPrefix: 'membership-management-web',
      accountDetails: AccountIds.membershipupgrades
    },
    {
      behaviorPathPattern: 'membership/newjoin*',
      s3OriginPath: '/membership/newjoin',
      bucketPrefix: 'membershipnewbusiness-web',
      accountDetails: AccountIds.membershipnewbusiness
    },
    {
      behaviorPathPattern: 'membership/rejoin*',
      s3OriginPath: '/membership/rejoin',
      bucketPrefix: 'membershipnewbusiness-web',
      accountDetails: AccountIds.membershipnewbusiness
    },
    {
      behaviorPathPattern: 'membership/manage*',
      s3OriginPath: '/membership/manage',
      bucketPrefix: 'membership-management-web',
      accountDetails: AccountIds.membershipupgrades
    },
    {
      behaviorPathPattern: 'membership/autopay-enrollment/*',
      s3OriginPath: '/membership/autopay-enrollment',
      bucketPrefix: 'membership-management-web',
      accountDetails: AccountIds.membershipupgrades
    }
  ]
};
