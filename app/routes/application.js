import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  actions: {
    willTransition(transition) {
      this.get('session').set('open', false);
    }
  }
});
