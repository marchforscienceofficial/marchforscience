import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';
import API from '../api';

const Types = {
  FETCH: 'SATELLITE_FETCH',
  ADD: 'SATELLITE_REMOVE',
  UPDATE: 'SATELLITE_UPDATE'
};

class SatelliteStore extends ReduceStore {
  constructor(...args){
    super(...args);
  }

  getInitialState(){
    return {
      satellites: "Foo"
    }
  }

  reduce(state, action) {
    switch(action.type) {

      case Types.FETCH:
        API.get('/api/satellites')
        .then((data) => {
          dispatcher.dispatch({
            type: Types.UPDATE,
            data: { satellites: data }
          });
        });
        return state;

      case Types.UPDATE:
        return Object.assign({}, state, action.obj);

      case Types.ADD:
        state.satellites.push();

        API.POST(`/api/satellites`, action.obj)
        .then((data) => {

        });

        return state;

      default:
        return state;

    }
  }

  fetch(){
    dispatcher.dispatch({
      type: Types.FETCH
    });
  }

  add(obj){
    dispatcher.dispatch({
      type: Types.UPDATE,
      obj
    });
  }

}

const instance = new SatelliteStore(dispatcher);

instance.fetch();

export default instance;