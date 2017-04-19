'use strict';
var express = require('express');
var rethinkdb = require('rethinkdb');

var data = require('../../data/satellitedata');

module.exports = function(server) {
  var Satellite = server.models.satellite;
  var User = server.models.user;

  function cb(err) {
    console.log(err);
  }

  try {
    r.dbCreate('marchforscience').run(conn, callback);
  } catch(e){};

  User.create({
    firstName: 'Super',
    lastName: 'User',
    email: 'superuser@marchforscience.com',
    password: 'password',
    role: 'admin',
    phone: '1234567890'
  }, function(err, users) {
    if (err) return cb(err);
  });

  if (server.models.satellite) {
    Satellite.count({}, (err, count) => {
      if (err) {
        console.log(err);
        return cb(null, false);
      }
      if (count === 0) {
        Satellite.destroyAll(function(err, info){
          if (err) return cb(err);
          Satellite.create(data, function(err, users) {
            if (err) return cb(err);
          });
        });
      }
    });
  }

};
