'use strict';
var express = require('express');
var path = require('path');

module.exports = function(server) {
  var router = server.loopback.Router();

  // Serve static content when requested
  server.use(express.static('dist'));

  // If this is not an ajax request, and request is for an asset that accepts html,
  // then this must be a first time render - just send our base page down.
  server.use((req, res, next) => {
    if( typeof req === 'object' && !req.xhr && req.accepts(['*/*', 'text/html']) === 'text/html' ){
      return res.sendFile(path.join(__dirname, '../../dist', 'index.html'), {}, function (err) {
        if (err) res.status((err) ? err.status : 500);
        else res.status(200);
      });
     }
     next();
  });

  // Go on to the rest of the server
  server.use(router);
};
