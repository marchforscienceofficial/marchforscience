import Ember from 'ember';

export default Ember.Route.extend({

  satellites: Ember.inject.service('satellites'),

  beforeModel(){
    this.get('satellites').setup();
  },

});
