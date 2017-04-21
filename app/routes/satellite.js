import Ember from 'ember';
import Satellite from '../models/satellite';

const { get, set } = Ember;

export default Ember.Route.extend({

  satellites: Ember.inject.service('satellites'),

  model(args){
    var uid = args.id;
    var sats = this.get('satellites.list')
    var data = sats.find((obj) => {
      return get(obj, 'uriName') === args.id;
    });
    return $.get(`/api/satellites/${data.id}`).then((data) => {
      return new Satellite(data);
    });
  }

});
