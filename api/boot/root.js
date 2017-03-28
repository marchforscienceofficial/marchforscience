'use strict';
var express = require('express');

module.exports = function(server) {
  var router = server.loopback.Router();
  server.use(express.static('dist'));
  server.use(router);
};
