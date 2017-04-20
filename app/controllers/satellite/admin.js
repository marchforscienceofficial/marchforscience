import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  showAddTeammate: false,
  actions: {
    toggleAddTeammate() {
      this.set('showAddTeammate', !this.get('showAddTeammate'));
    },

    removeTeammate(adminId, adminObj){
      $.ajax(`/api/SatelliteAdmins/${adminId}`, {
        method: 'DELETE'
      }).then((data, status, res) => {

        if (res.status !== 200) {
          throw new Error("Problem deleting", res);
        }

        var admins = this.get('model.admins');
        admins.splice(admins.indexOf(adminObj), 1);
        this.set('model.admins', admins.slice());


        return this.get('notifications').success('User removed');

      }, (err) => {
      console.error('Error deleting admin account.', err);
        return this.get('notifications').error('Oops! Something went wrong. Please try again later.');
      });

    },

    addTeammate(email, title) {
      // If no input data, throw
      if ( !email || !title ) {
        return this.get('notifications').error('Please enter the email and title of your teammate.');
      }

      var user;

      // Fetch user object with email
      $.ajax(`/api/users`, {
        method: 'GET',
        data: {filter: {"where": {"email": email}}}
      })
      .then((data=[], status, res) => {

        // If no user found, throw
        if (data.length === 0) {
          throw new Error('No user found with that email! Please ask them to join first.');
        }

        if (res && res.status !== 200) {
          throw new Error("Problem fetching");
        }

        user = data[0];
        var admins = this.get('model.admins');

        if (admins.forEach((admin) => {
          if (admin.id === user.id) throw new Error('User is already an admin.');
        }))

        // Otherwise, post new admin
        return $.ajax(`/api/SatelliteAdmins`, {
          method: 'POST',
          data: {
            "title": title,
            "satelliteId": this.get('model.id'),
            "userId": data[0].id
          }
        })

        // If error fetching, log
      })

      // If successful save, notify. If error posting, log
      .then ((data={}, status, res) => {

        if (res && res.status !== 200) {
          throw new Error('Oops! Something went wront. Please re-log in and try again.');
        }

        this.set('showAddTeammate', false);
        var admins = this.get('model.admins');
        admins.push({
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          adminroles: [{title: title}]
        });
        this.set('model.admins', admins.slice());
        return this.get('notifications').success('Satellite admin added.');
      }, (err) => {
        console.error('Error saving admin account info.', err);
        return this.get('notifications').error(err.message || 'Oops! Something went wrong. Please try again later.');
      });
    }
  },

  isAdmin: Ember.computed('model.admins', 'session.id', function(){
      var admins = get(this.model, 'admins');
      var uid = get(this, 'session.id');

      if (!admins || !uid) return false;

      for (let i=0;i<admins.length;i++){
        if (admins[i].id === uid) return true;
      }

      return false;

  })

});