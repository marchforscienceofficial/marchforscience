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

  if (User) {
    User.count({where: { email: 'superuser@marchforscience.com'}}, (err, count) => {
      if (err) return cb(err);
      if (count !== 0) return;
      User.create({
        firstName: 'Super',
        lastName: 'User',
        email: 'superuser@marchforscience.com',
        password: 'password',
        role: 'admin',
        phone: '1234567890',
        image: 'https://dev.marchforscience.s3.amazonaws.com/b094f6140a64b3e932c43458773ded61'
      }, function(err, users) {
        if (err) return cb(err);
      });
    });
  }

  if (Satellite) {
    Satellite.count({}, (err, count) => {
      if (err) return cb(err);
      if (count !== 0) return;
      Satellite.destroyAll(function(err, info){
        if (err) return cb(err);
        Satellite.create(data, function(err, users) {
          if (err) return cb(err);
        });
      });
    });
  }

};
