import Ember from 'ember';

var { get } = Ember

export default Ember.Route.extend({

  model(){
    return this.get('store').findAll('satellite').then((data)=>{
      data = data.sortBy('city', 'state', 'country');

      return {
        satellites: data
      };
    });
  }

});
