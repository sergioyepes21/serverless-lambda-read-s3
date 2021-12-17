## Description

This project is a [Serverless Framework](https://www.serverless.com/framework/docs/providers/aws) project made with AWS as the Cloud provider.

If you run the project, you will create an AWS Lambda on us-east-1 that reads from an S3 bucket define on the Serverless Framework app's parameters

It is necessary to read all the ```// TODO``` comments and solve them.

## Installation

Follow the Serverless Framework [Get Started](https://www.serverless.com/framework/docs/getting-started) guide to install the serverless CLI and configure the [config credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials) of your AWS account/user/role

Install the project's dependencies:

```bash
$ npm install
```

Create the S3 bucket and the .csv file on AWS S3. Set the bucket name and file name on the serverless Web App parameter section with the keys defined on the ```serverless.yml``` file.

## Deploying the app

Deploy the serverless app:

```bash
$ serverless deploy
```

Now you can go and update your S3 file on the bucket created and check how the Lambda function processed it :)

## Stay in touch

- Author - [Sergio Yepes](https://github.com/sergioyepes21)
- LinkedIn - [Sergio Yepes](https://www.linkedin.com/in/sergio-andr%C3%A9s-yepes-joven-41405b174)
