import Ember from 'ember';

export default Ember.Route.extend({
  init(){
    this._super(...arguments);
    this.get('notifications').setDefaultAutoClear(true);
  }
});
