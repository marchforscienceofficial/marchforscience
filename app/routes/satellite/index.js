import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Route.extend({
  model(){
    return this.modelFor("satellite");
  }
});
