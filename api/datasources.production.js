module.exports = {
  "mongodb": {
    "connector": "mongodb",
    "name": "mongodb",
    "host": process.env.MONGO_HOST,
    "database": "marchforscience",
    "url":  "",
    "user": "marchforscience",
    "password": process.env.MONGO_PASS,
    "port": 27017
  }
};
