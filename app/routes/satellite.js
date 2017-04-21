import Ember from 'ember';
import Satellite from '../models/satellite';

const { get, set } = Ember;

export default Ember.Route.extend({

  satellites: Ember.inject.service('satellites'),

  beforeModel(){
    return this.get('satellites').setup();
  },

  model(args){
    var uid = args.id;
    var sats = this.get('satellites.list')
    var data = sats.find((obj) => {
      return get(obj, 'uriName') === uid;
    });
    return $.get(`/api/satellites/${data.id}`).then((data) => {
      return new Satellite(data);
    });
  }

});
