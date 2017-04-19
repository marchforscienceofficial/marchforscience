import Ember from 'ember';
import Satellite from '../models/satellite';

const { get, set } = Ember;

export default Ember.Route.extend({

  model(args){
    return $.get(`/api/satellites/${args.id}`).then((data) => {
      return new Satellite(data);
    });
  }

});
