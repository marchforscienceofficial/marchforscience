import Ember from 'ember';

var { get } = Ember

export default Ember.Route.extend({

  model(){
    return $.get(`/api/satellites`).then((data)=>{

      data = data.sort(function(obj1, obj2){
        if (obj1.city > obj2.city) return 1;
        if (obj1.city < obj2.city) return -1;
        if (obj1.state > obj2.state) return 1;
        if (obj1.state < obj2.state) return -1;
        if (obj1.country > obj2.country) return 1;
        if (obj1.country < obj2.country) return -1;
        return 0;
      });

      return {
        satellites: data
      };
    });
  }

});
