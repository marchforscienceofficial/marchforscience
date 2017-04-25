import Ember from 'ember';
const { set, get } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
});
