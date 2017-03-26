import { ReduceStore } from 'flux/utils';
import Types from './Types';
import dispatcher from '../dispatcher';

class UserStore extends ReduceStore {
  constructor(...args){
    super(...args);
  }

  getInitialState(){
    return {
      firstName: "Foo",
      lastName: "Bar"
    }
  }

  reduce(state, action) {
    switch(action.type) {

      case Types.LOGIN:
        return state;

      case Types.LOGOUT:
        return state;

      case Types.UPDATE:
        return Object.assign({}, state, action.obj);

      default:
        return state;

    }
  }

  login(email, password){
    dispatcher.dispatch({
      type: Types.LOGIN,
      email,
      password
    });
  }

  logout(){
    dispatcher.dispatch({
      type: Types.LOGOUT
    });
  }

  signup(email, password){
    dispatcher.dispatch({
      type: Types.SIGNUP,
      email,
      password
    });
  }

  update(obj){
    dispatcher.dispatch({
      type: Types.UPDATE,
      obj
    });
  }

}

export default new UserStore(dispatcher);