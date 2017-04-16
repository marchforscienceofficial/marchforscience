import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    routeTab(route){
      this.transitionTo(route);
    }
  }
});
