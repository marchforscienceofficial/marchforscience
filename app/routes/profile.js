import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout(){
      var self = this;
      return this.get('session').logout().then(() => {
        self.transitionTo('index');
      }, () => {
        self.transitionTo('index');
      });
    }
  },

  beforeModel(){
    if (this.get('session.isLoggedOut')) this.transitionTo('index');
  }
});
