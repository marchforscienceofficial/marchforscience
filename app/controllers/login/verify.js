import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    reverify(event){
      event.preventDefault();
      let email = this.get('session.email');
      return $.post('/api/reverify', {
        email: email
      }).then(() => {
        this.get('notifications').success('Email sent.');
      }, (err) => {
        this.get('notifications').error(err.responseJSON && err.responseJSON.message || 'Error re-sending verification code');
      });
    },
  }
});