'use strict';
var express = require('express');

module.exports = function(server) {
  var router = server.loopback.Router();
  server.use(express.static('build'));
  // router.get('/', server.loopback.status());
  server.use(router);
};
