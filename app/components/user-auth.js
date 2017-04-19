import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  open: false,
  isLogin: true,
  actions: {
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
      }, () => {
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

      if (!email || !password || !firstName || !lastName || !phone){ return; }
      this.get('session').register({
        email,
        password,
        firstName,
        lastName,
        phone,
        zip
      }).then((err, res) => {
        if (err) return;
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
