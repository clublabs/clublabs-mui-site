import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';

export type IOrigins = StandardPatternOrigin | EnvOrigins

export type EnvOrigins = {
  [key in EnvironmentValue]?: EnvSpecificOrigin
}

export interface StandardPatternOrigin {
  behaviorPathPattern: string;
  s3OriginPath: string;
  bucketPrefix: string;
  accountDetails: {
    [key in EnvironmentValue]?: string;
  };
}

export interface EnvSpecificOrigin {
  behaviors: [{
    behaviorPathPattern: string;
    s3OriginPath: string;
  }]
  bucketAccountId: string;
  bucketName?: string;
  bucketPrefix?: string;
}

export interface TeamOrigins {
  team: TeamValue;
  origins: IOrigins[];
}
