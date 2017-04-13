'use strict';

var tracker = require('pixel-tracker')

module.exports = function(server) {

  tracker.use(function (err, res){
    console.log(res);
  });

  server.all('/pixel', tracker.middleware);

};
