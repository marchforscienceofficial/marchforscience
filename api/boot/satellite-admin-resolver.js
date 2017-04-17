'use strict';

module.exports = function(app) {
  var Role = app.models.Role;
  console.log('SatelliteAdmin')
  Role.registerResolver('SatelliteAdmin', function(role, context, cb) {
    console.log('in...')
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // if the target model is not satellite
    console.log(context.modelName )
    if (context.modelName !== 'satellite') {
      return reject();
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    // check if userId is in team table for the given satellite id
    var Team = app.models.SatelliteAdmins;
    console.log(context.modelId, userId)
    Team.count({
      satelliteId: context.modelId,
      userId: userId,
    }, function(err, count) {
      console.log(arguments)
      if (err) {
        console.log(err);
        return cb(null, false);
      }

      cb(null, count > 0); // true = is a team member
    });
  });
};
