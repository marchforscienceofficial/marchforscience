import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    this.transitionTo('satellite.admin.about');
  }
});
