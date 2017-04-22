# March for Science
## Grassroots Management System

### Infrastructure

Data Layer [RethinkDB](https://www.rethinkdb.com/docs/install/)

API Layer [LoopBack](http://loopback.io)

Web Client [Ember](http://emberjs.com)

### Getting Set Up

Ensure the following is installed on your system before starting.
 - Install Loopback CLI: `npm install -g loopback-cli`
 - Install Ember CLI: `npm install -g ember-cli`
 - NPM Install: `npm install`

Create a [Google Cloud Platform service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts)
and grant it the Cloud Datastore User role. Save the secret key as `datastore-secret-key.json` in the marchforscience
project directory.

Create an `.env` file in the marchforscience project directory and populate it with the approprate values.

```
# Node Process Settings
NODE_ENV=development
NODE_SESSION_SECRET=

# Amazon S3 Configuration
S3_BUCKET=
S3_REGION=
S3_SECRET=
S3_KEY=

# Google Cloud Platform Configuration
GOOGLE_PROJECT_ID=
GOOGLE_SERVICE_ACCOUNT=
```

### Getting Started

In two separate terminal tabs:
 - Start the API server: `npm run server`
 - Start the Ember client: `npm start`

The web app will be accessible at [http://localhost:4200/](http://localhost:4200/)

The API explorer will be accessible at [http://localhost:4000/explorer](http://localhost:4000/explorer)

The database explorer will be accessible at [http://localhost:8080/](http://localhost:8080/)
