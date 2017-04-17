'use strict';

module.exports = function(User) {
  User.on('dataSourceAttached', function(obj){
    var find = User.find;
    User.find = function(filter={}, auth, cb) {
      // Don't infinite loop while including satellites (which in turn include users...)
      if (cb.name !== 'targetsFetchHandler'){
        filter.include = [{
          relation: 'satellites',
          scope: {
            fields: ['id', 'name', 'logo', 'city', 'state', 'country'],
          }
        }];
      }
      return find.call(this, filter, auth, cb);
    };
  });
};
