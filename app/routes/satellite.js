import Ember from 'ember';

export default Ember.Route.extend({

  model(args){
    return this.get('store').find('satellite', args.id);
  }

});
