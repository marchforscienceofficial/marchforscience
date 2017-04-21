# March for Science
## Grassroots Management System

### Infrastructure

Data Layer [RethinkDB](https://www.rethinkdb.com/docs/install/)

API Layer [LoopBack](http://loopback.io)

Web Client [Ember](http://emberjs.com)

### Getting Set Up

Ensure the following is installed on your system before starting.
 - Install MongoDB: `brew install mongodb && mkdir -p /data/db && sudo chmod 777 /data/db`
 - Install Loopback CLI: `npm install -g loopback-cli`
 - Install Ember CLI: `npm install -g ember-cli`
 - NPM Install: `npm install`

### Getting Started

In three separate terminal tabs:
 - Start MongoDB by running: `mongod`
    * Go to localhost:8080 in your browser
    * Add a new database called "marchforscience"
 - Start the API server: `npm run server`
 - Start the Ember client: `npm start`

The web app will be accessible at [http://localhost:4200/](http://localhost:4200/)

The API explorer will be accessible at [http://localhost:4000/explorer](http://localhost:4000/explorer)

The database explorer will be accessible at [http://localhost:8080/](http://localhost:8080/)
