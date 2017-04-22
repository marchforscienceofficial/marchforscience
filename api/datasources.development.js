module.exports = {
  "gcloud-datastore": {
    "name": "gcloud-datastore",
    "connector": "gcloud",
    "projectId": process.env.GOOGLE_PROJECT_ID,
    "keyFilename": "/home/ekay/datastore-secret-key.json",
    "email": "cloud-datastore-user@march-for-scienc-1486718000456.iam.gserviceaccount.com",
  },
  "mongodb": {
    "connector": "mongodb",
    "name": "mongodb",
    "host": "127.0.0.1",
    "url":  "",
    "database": "marchforscience",
    "user": "me",
    "password": "me",
    "port": 27017
  }
};
