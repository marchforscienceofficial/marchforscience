import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr(),
  middleName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  role: DS.attr(),

  isAdmin: Ember.computed('role', function(){
    return this.get('role') === 'admin';
  })
});
