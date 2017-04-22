module.exports = {
  "gcloud-datastore": {
    "name": "gcloud-datastore",
    "connector": "gcloud",
    "projectId": process.env.GOOGLE_PROJECT_ID,
    "keyFilename": "datastore-secret-key.json",
    "email": process.env.GOOGLE_SERVICE_ACCOUNT
  },
  "mongodb": {
    "connector": "mongodb",
    "name": "mongodb",
    "host": "127.0.0.1",
    "url":  "",
    "database": "marchforscience",
    // "user": "me",
    // "password": "me",
    "port": 27017
  }
};
