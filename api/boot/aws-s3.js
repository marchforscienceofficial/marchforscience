'use strict';

// Example Config Keys
var s3Options = {
 accessKeyId: process.env.S3_KEY,
 secretAccessKey: process.env.S3_SECRET,
 region: process.env.S3_REGION,
 bucket: process.env.S3_BUCKET
};

const aws = require('aws-sdk');

aws.config.update(s3Options);
const client = new aws.S3();

function signedUrl(fileName, fileType) {
 return new Promise((resolve, reject) => {
   const bucket = s3Options.bucket;
   const params = {
     Bucket: bucket,
     Key: fileName,
     Expires: 60,
     ContentType: fileType,
     ACL: 'public-read'
   };

   client.getSignedUrl('putObject', params, function(err, data){
     if (err) {
       console.error('Error fetching s3 token', err);
       reject(err);
     }
     const returnData = {
       signedRequest: data,
       url: `https://${bucket}.s3.amazonaws.com/${fileName}`
     }
     resolve(returnData);
   });
 });
}

module.exports = function(server) {
  server.post('/api/s3-token', (req, res, next) => {
   signedUrl(req.body.file, req.body.type).then((data) => {
     res.send(data);
   }, (e) => {
     res.status(500).send({
       status: 'error',
       message: e.message,
       code: e.code
     });
   });
 });

};
