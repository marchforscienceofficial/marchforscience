import Ember from 'ember';

const { set, get } = Ember;

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  actions: {
    onSubmit(event){
      event.preventDefault();
      let email = get(this.currentModel, 'email');
      let password = get(this.currentModel, 'password');

      if (!email || !password) { return this.get('notifications').error('Invalid email or password'); }

      this.get('session').login(email, password).then((err, res) => {
        set(this.currentModel, 'email', '');
        set(this.currentModel, 'password', '');
        this.transitionTo('profile');
      }, () => {
        this.get('notifications').error('Invalid email or password');
      });
    }
  },

  beforeModel(){
    if (this.get('session.isLoggedIn')) { this.transitionTo('profile'); }
  },

  model(){
    return {
      email: "",
      password: ""
    }
  }
});
