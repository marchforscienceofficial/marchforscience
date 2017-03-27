'use strict';
var express = require('express');

module.exports = function(server) {
  var MarchRoles = server.models.MarchRoles;
  var RoleMapping = server.models.RoleMapping;
  // MarchRoles.create({
  //   name: 'SatelliteLead'
  // }, function(role){
  //   console.log('Created role:', role);
  // });

  function cb(err) {
    console.log(err);
  }
  //
  // server.models.user.create([
  //   {username: 'johasdfanahn', email: 'johanasdf@doe.com', password: 'opensesame', firstName: 'FirstName', lastName: 'LastName', phone: '1234567890'},
  //   {username: 'janasdfaene', email: 'janaasdfe@doe.com', password: 'opensesame', firstName: 'FirstName', lastName: 'LastName', phone: '1234567890'},
  //   {username: 'Boaasdfb', email: 'boasdfba@projects.com', password: 'opensesame', firstName: 'FirstName', lastName: 'LastName', phone: '1234567890'}
  // ], function(err, users) {
  //   if (err) return cb(err);
  //
  //   //create the admin role
  //   MarchRoles.create({
  //     name: 'admin'
  //   }, function(err, role) {
  //     if (err) cb(err);
  //
  //     //make bob an admin
  //     role.principals.create({
  //       principalType: RoleMapping.USER,
  //       principalId: users[2].id
  //     }, function(err, principal) {
  //       cb(err);
  //     });
  //   });
  // });

};
