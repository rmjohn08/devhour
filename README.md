# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

# Needed packages

@aws-cdk/aws-s3 @aws-cdk/aws-lambda @aws-cdk/aws-lambda-event-sources @aws-cdk/aws-dynamodb @aws-cdk/iam

# if issues with cli compatibility when cdk synth

npm install -g aws-cdk@latest
or
yarn global upgrade aws-cdk
