import Ember from 'ember';

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
      this.store.find('user', this.get('session.user.id')).then((obj) => {
        obj.setProperties(this.get('session.user'));
        obj.save();
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
