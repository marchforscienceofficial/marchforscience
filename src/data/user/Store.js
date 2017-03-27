import { ReduceStore } from 'flux/utils';
import Types from './Types';
import dispatcher from '../dispatcher';
import API from '../api';

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
        API.post('/api/users/login', {
      		username: action.username,
      		password: action.password
      	})
        .then((data) => {
          dispatcher.dispatch({
            type: Types.FETCH,
            userId: data.userId,
            token: data.id
          });
        });
        return state;

      case Types.FETCH:
        API.get(`/api/users/${action.userId}`)
        .then((data) => {
          dispatcher.dispatch({
            type: Types.UPDATE,
            obj: data
          });
        });
        return state;


      case Types.LOGOUT:
        return state;

      case Types.UPDATE:
        return Object.assign({}, state, action.obj);

      default:
        return state;

    }
  }

  login(username, password){
    dispatcher.dispatch({
      type: Types.LOGIN,
      username,
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

const instance = new UserStore(dispatcher);

if (API.isAuthenticated()) {
  dispatcher.dispatch({
    type: Types.FETCH,
    userId: API.userId
  });
}

export default instance;