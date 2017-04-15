import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({

  store: Ember.inject.service('store'),

  init(){
    this._super(...arguments);
    this.set('accessToken', (document.cookie.match(/session=([^;]+)/) || [])[1]);
    this.set('id', (document.cookie.match(/uid=([^;]+)/) || [])[1]);
    let id = this.get('id');
    if (!id) return;
    return this.get('store').findRecord('user', id).then((data) => {
      this.set('user', data);
    });
  },

  login(email, password){

    if (this.get('isLoggedIn')) {
      return new Promise((resolve, reject) => {
        reject({
          error: 'Already logged in'
        });
      });
    }

    return $.post('/api/users/login', {
      email: email,
      password: password
    })

    .then((response) => {
      response.accessToken = response.id;
      delete response.id;
      this.set('accessToken', response.accessToken);
      this.set('id', response.userId);
      document.cookie = `session=${response.accessToken}; expires=${new Date(Date.now() + response.ttl).toGMTString()}`;
      document.cookie = `uid=${response.userId}; expires=${new Date(Date.now() + response.ttl).toGMTString()}`;
      this.set('user', this.get('store').findRecord('user', response.userId));
      return response;
    }, (err) => {
      Ember.Logger.error(err);
      throw new Error('Error logging in', err);
    })

  },


  register(obj){

    if (!obj.email || !obj.password || !obj.firstName || !obj.lastName || !obj.phone){
      return new Promise((resolve, reject) => {
        reject({
          error: 'Impropper input to register method'
        });
      });
    }


    if (this.get('isLoggedIn')) { return; }

    return $.post('/api/users', { data: {
      type: 'users',
      attributes: obj
    }})

    .then((response) => {
      return this.login(obj.email, obj.password);
    }, (err) => {
      Ember.Logger.error(err);
      throw new Error('Error registering in', err);
    })

  },

  logout(){
    if (this.get('isLoggedOut')) {
      return new Promise((resolve, reject) => {
        reject({
          error: 'Already logged out'
        });
      });
    }

    return $.post('/api/users/logout?access_token='+ this.get('accessToken'))
    .then((response) => {
      this.set('accessToken', void 0);
      this.set('id', void 0);
      this.set('user', {});
      document.cookie = `session=; expires=${new Date(Date.now() - 1).toGMTString()}`;
      document.cookie = `uid=; expires=${new Date(Date.now() - 1).toGMTString()}`;
      return response;
    }, (err) => {
      Ember.Logger.error(err);
    })

  },

  isLoggedIn: Ember.computed('accessToken', function() {
    return !!this.get('accessToken');
  }),

  isLoggedOut: Ember.computed('accessToken', function() {
    return !this.get('accessToken');
  })

});
