'use strict';
var express = require('express');

var data = require('../../data/satellitedata');

module.exports = function(server) {

  function cb(err) {
    console.log(err);
  }

  server.models.satellite.destroyAll(function(err, info){
    if (err) return cb(err);
    server.models.satellite.create(data, function(err, users) {
      if (err) return cb(err);
    });
  })


};
