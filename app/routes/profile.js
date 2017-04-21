import Ember from 'ember';

const { get, set } = Ember;

// Keys we will send to the server
const savedKeys = [ 'image', 'firstName', 'lastName', 'middleName', 'email', 'phone', 'bio' ];

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  actions: {

    logout(){
      var self = this;
      return this.get('session').logout().then(() => {
        self.transitionTo('index');
      }, () => {
        self.transitionTo('index');
      });
    },

    saveUserInfo(){

      // Construct a proper data object to send from the model
      var data = {};
      var model = this.get('session.user');
      savedKeys.forEach((key) => { data[key] = get(model, key); });

      // Send data to server
      $.ajax(`/api/users/${get(this, 'session.user.id')}`, {
        method: 'PATCH',
        data: data
      }).then(() => {
        this.get('notifications').success('Saved successfully!');
      }, () => {
        this.get('notifications').error('Oops, something went wrong...');
      });

    },

    updatePassword(){
      // Send data to server
      var model = this.get('session.user');

      $.ajax(`/api/users/change-password`, {
        method: 'POST',
        data: {
          oldPassword: get(model, 'oldPass'),
          newPassword: get(model, 'newPass'),
        }
      }).then(() => {
        this.get('notifications').success('Password updated!');
        set(model, 'oldPass', '');
        set(model, 'newPass', '');
      }, () => {
        this.get('notifications').error('Oops, something went wrong...');
      });

    },

    onProfileImageUpload(url){
      this.set('session.user.image', url)
    }
  },

  beforeModel(){
    if (this.get('session.isLoggedOut')) this.transitionTo('index');
  },

  model(){
    return {};
  }
});
