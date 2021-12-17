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

## Project in action

The following images show how the Lambda functions automatically runs every time the S3 Object is updated:

* Lambda created after serverless deployment:

![image](https://user-images.githubusercontent.com/35923377/146617906-131c2a4d-272b-4193-b2cd-8839e8c88b4c.png)

* Lambda Monitor Metrics showing the function's invocations:

![image](https://user-images.githubusercontent.com/35923377/146617975-9fbcaf11-cf2b-4ac8-9419-fc6e149f0f5c.png)

* Lambda logs example on the number of records on the .csv file stored on the S3 Bucket:

![image](https://user-images.githubusercontent.com/35923377/146618091-10434097-ff2b-438e-b82f-de47fc722ddb.png)

* S3 Object's versions and its modified date

![image](https://user-images.githubusercontent.com/35923377/146618027-9e0c1b98-424a-4e9b-b4c0-4766af210812.png)


## Stay in touch

- Author - [Sergio Yepes](https://github.com/sergioyepes21)
- LinkedIn - [Sergio Yepes](https://www.linkedin.com/in/sergio-andr%C3%A9s-yepes-joven-41405b174)
