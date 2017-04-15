'use strict';

module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('SuperAdmin', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // if the target model is not satellite
    if (context.modelName !== 'satellite') {
      return reject();
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    // check if userId is in team table for the given satellite id
    var Members = app.models.user;

    Members.count({
      role: 'admin',
      principalId: userId,
    }, function(err, count) {
      if (err) {
        console.log(err);
        return cb(null, false);
      }

      cb(null, count > 0); // true = is a team member
    });
  });
};
