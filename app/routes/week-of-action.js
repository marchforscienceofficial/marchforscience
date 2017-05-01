import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  init(){
    this._super(...arguments);
    this.get('notifications').setDefaultAutoClear(true);
  }
});
