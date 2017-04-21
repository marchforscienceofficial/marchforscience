import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  open: false,
  isLogin: true,
  actions: {

    reverify(event){
      event.preventDefault();
      let email = this.get('email');
      return $.post('/api/reverify', {
        email: email
      }).then(() => {
        this.get('notifications').success('Email sent.');
      });
    },

    onLogin(event){
      event.preventDefault();
      let email = this.get('email');
      let password = this.get('password');
      this.get('session').login(email, password).then((err, res) => {

        this.setProperties({
          open: false,
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          phone: '',
          zip: '',
          isLogin: true
        });
      }, (err) => {

        if (err.responseJSON.error.message === "login failed as the email has not been verified") {
          this.set("verification", true);
          this.get('notifications').error('Your email has not been verified');
          return;
        }

        this.get('notifications').error('Invalid email or password');
      });
    },

    onRegister(event){
      event.preventDefault();
      let email = this.get('email');
      let password = this.get('password');
      let firstName = this.get('firstName');
      let lastName = this.get('lastName');
      let phone = this.get('phone');
      let zip = this.get('zip');

      if (!email || !password || !firstName || !lastName || !phone){
        return this.get('notifications').error('Please fill out all fields');
      }
      this.get('session').register({
        email,
        password,
        firstName,
        lastName,
        phone,
        zip
      }).then((err, res) => {
        if (err) return;
        this.set("verification", true);
        this.get('notifications').error('Email sent.');
      }, (err) => {
        this.get('notifications').error('Problem registering user account');
      });
    },

    onSubmit(event){
      event.preventDefault();
      this.actions[this.get('isLogin') ? 'onLogin' : 'onRegister'].call(this, event);
    },

    logout(){
      return this.get('session').logout();
    },

    toggle(){
      this.toggleProperty('open');
    },

    toggleAction(){
      this.toggleProperty('isLogin');
    }
  }
});
