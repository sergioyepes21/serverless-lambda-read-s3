'use strict';
const S3 = require('aws-sdk/clients/s3');
const csv = require('csvtojson');
const awsS3 = new S3({ apiVersion: '2006-03-01' });

/**
 * Returns an unexpected error object
 * @param {number} statusCode Status code of response
 * @param {string} message Error message
 * @param {any} input Input of lambda
 * @returns Unexpected Error Object
 */
const responseObj = (statusCode, message, input) => {
  const body = { message, input };
  const response = {
    statusCode,
    body: JSON.stringify(body, null, 2),
  };
  console.log('Response: ', { statusCode, body });
  return response;
}

/**
 * Reads an s3 bucket that was recently updated
 * @param {*} event event containing the S3 bucket and file information
 * @returns object status response and input
 */
module.exports.readFromS3 = async (event) => {
  if (!event || !event.Records || event.Records.length <= 0) {
    return responseObj('Event does not contain the bucket information.', event);
  }
  try {
    const { Records } = event;
    const { s3 } = Records[0];
    const {
      bucket: {
        name: bucketName,
      },
      object: {
        key: fileKeyName,
      },
    } = s3 ? s3 : { bucket: {}, object: {} };
    if (!fileKeyName || !fileKeyName.includes('.csv')) {
      return responseObj(500, 'The file does not exist or it is not a .csv file ', event);
    }
    const s3GetObjectParams = {
      Bucket: bucketName,
      Key: fileKeyName,
    };
    let list = await (async () => {
      // Encapsulating sync operation (createReadStream) on async function 
      const stream = awsS3.getObject(s3GetObjectParams).createReadStream();
      return await csv().fromStream(stream);
    })();
    return responseObj(200, 'Total registries: ' + list.length, event);
  } catch (e) {
    console.error('Unexpected error: ' + e.message);
    return responseObj(500, 'Unexpected error: ' + e.message, event);
  }
};
