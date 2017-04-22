module.exports = {
  "gcloud-datastore": {
    "name": "gcloud-datastore",
    "connector": "gcloud",
    "projectId": process.env.GOOGLE_PROJECT_ID,
    "keyFilename": "datastore-secret-key.json",
    "email": process.env.GOOGLE_SERVICE_ACCOUNT
  }
};
