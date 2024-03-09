import { Environment } from 'aws-cdk-lib';

// Parameters for Application
export interface AppParameter {
  env?: Environment;
  envName: string;
}

// Example
export const stgParameter: AppParameter = {
  env: { account: '654654329506', region: 'us-east-1' },
  envName: 'Stg',
};

// Example
export const prodParameter: AppParameter = {
  env: { account: '654654329506', region: 'us-east-1' },
  envName: 'Prod',
};