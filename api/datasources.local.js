module.exports = {
  "ses": {
    "name": "ses",
    "connector": "mail",
    "transports": [
      {
        "type": "ses",
        "region": "us-west-2",
        "accessKeyId": process.env.S3_KEY,
        "secretAccessKey": process.env.S3_SECRET,
        "rateLimit": 1
      }
    ]
  }
};