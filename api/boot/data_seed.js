'use strict';
var express = require('express');
var rethinkdb = require('rethinkdb');

var data = require('../../data/satellitedata');

module.exports = function(server) {

  function cb(err) {
    console.log(err);
  }

  try {
    r.dbCreate('marchforscience').run(conn, callback);
  } catch(e){};

  if (server.models.satellite) {
    server.models.satellite.destroyAll(function(err, info){
      if (err) return cb(err);
      server.models.satellite.create(data, function(err, users) {
        if (err) return cb(err);
      });
    });
  }

};
