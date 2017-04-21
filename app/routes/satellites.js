import Ember from 'ember';

var { get, set } = Ember

export default Ember.Route.extend({

  satellites: Ember.inject.service('satellites'),

  beforeModel(){
    return this.get('satellites').setup();
  },

  model(){
      return { };
  }

});
