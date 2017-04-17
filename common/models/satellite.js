'use strict';

module.exports = function(Satellite) {
  Satellite.on('dataSourceAttached', function(obj){
    var find = Satellite.find;
    Satellite.find = function(filter={}, auth, cb) {
console.log(cb.name)
      // Don't infinite loop while including users (which in turn include satellites...)
      if (cb.name !== 'targetsFetchHandler'){
        filter.include = [{
          relation: 'admins',
          scope: {
            fields: ['firstName', 'lastName', 'image', 'bio'],
          }
        }];
      }
      return find.call(this, filter, auth, cb);
    };
  });

};
