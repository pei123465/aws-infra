import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export class GithubAction20240309Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    new ssm.StringParameter(this, 'SsmS3Arn', {
      parameterName: `/TestS3/Arn`,
      stringValue: bucket.bucketArn
    })
  }
}
