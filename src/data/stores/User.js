import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';
import API from '../api';

const Types = {
  LOGIN: 'USER_LOGIN',
  FETCH: 'USER_FETCH',
  LOGOUT: 'USER_LOGOUT',
  SIGNUP: 'USER_SIGNUP',
  UPDATE: 'USER_UPDATE',
  SAVE: 'USER_SAVE'
};

class UserStore extends ReduceStore {
  constructor(...args){
    super(...args);
  }

  getInitialState(){
    return {}
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
            userId: data.userId
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

      case Types.SAVE:
        var update = Object.assign({}, state, action.obj);
        debugger;
        API.patch(`/api/users/${action.obj.id}`, update)
        .then((data) => {

        });
        return update;


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

  save(obj){
    dispatcher.dispatch({
      type: Types.SAVE,
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