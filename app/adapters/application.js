import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  session: Ember.inject.service('session'),
  headers: Ember.computed('session.accessToken', function() {
    return {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': this.get('session.accessToken')
    };
  })
});
