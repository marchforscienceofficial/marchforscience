import Ember from 'ember';
import ENV from '../../config/environment';

const { get, set } = Ember;

const DEFAULT_LOGO = '801f9cad956f164b261a155c66c74a08';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  showAddTeammate: false,
  showAddEndorsement: false,
  showAddSponsor: false,

  actions: {
    toggleAddTeammate() {
      this.set('showAddTeammate', !this.get('showAddTeammate'));
    },

    toggleEndorsement(image) {
      this.set('endorsementImage', image);
      this.set('showAddEndorsement', !this.get('showAddEndorsement'));
    },

    toggleSponsor(image) {
      this.set('sponsorImage', image);
      this.set('showAddSponsor', !this.get('showAddSponsor'));
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
    },

    addEndorsement (name, link){
      var image = this.get('endorsementImage');
      var arr = get(this.model, "endorsements");
      if ( !name || !link ) { return this.get('notifications').error('Please fill out all fields'); }
      arr.push({ name: name, link: link, image: image });
      set(this.model, "endorsements", arr.slice());

      return this.saveEndorsements().then(() => {
        this.set('endorsementName', '');
        this.set('endorsementLink', '');
        this.set('endorsementImage', '');
        this.set('showAddEndorsement', false);
        return this.get('notifications').success('Endorsement added');
      });
    },

    removeEndorsement (obj){
      var arr = get(this.model, "endorsements");
      arr.splice(arr.indexOf(obj), 1);
      set(this.model, 'endorsements', arr.slice());
      return this.saveEndorsements().then(() => {
        return this.get('notifications').success('Endorsement removed');
      });
    },

    addSponsor (name, link){
      var image = this.get('sponsorImage');
      var arr = get(this.model, "sponsors");
      if ( !name || !link ) { return this.get('notifications').error('Please fill out all fields'); }
      arr.push({ name: name, link: link, image: image });
      set(this.model, "sponsors", arr.slice());

      return this.saveSponsors().then(() => {
        this.set('sponsorName', '');
        this.set('sponsorLink', '');
        this.set('sponsorImage', '');
        this.set('showAddSponsor', false);
        return this.get('notifications').success('Sponsor added');
      });
    },

    removeSponsor (obj) {
      var arr = get(this.model, "sponsors");
      arr.splice(arr.indexOf(obj), 1);
      set(this.model, 'sponsors', arr.slice());
      return this.saveSponsors().then(() => {
        return this.get('notifications').success('Sponsor removed');
      });
    }
  },

  saveEndorsements (){
    return $.ajax(`/api/satellites/${get(this.model, 'id')}`, {
      method: 'PATCH',
      data: {
        "endorsements": get(this.model, "endorsements")
      }
    });
  },

  saveSponsors (){
    return $.ajax(`/api/satellites/${get(this.model, 'id')}`, {
      method: 'PATCH',
      data: {
        "sponsors": get(this.model, "sponsors")
      }
    });
  },

  logo: Ember.computed('model.facebook', 'model.twitter', 'model.logo', function(){

    var IMG = get(this.model, 'logo');

    var twitter = get(this.model, 'twitter')
    var facebook = get(this.model, 'facebook')

    if ( twitter ) {
      IMG = 'https://twitter.com/' + twitter.match(/twitter\.com\/([^\/]+)/)[1] + '/profile_image?size=original';
    }

    else if ( facebook ) {
      IMG = 'https://graph.facebook.com/' + facebook.match(/facebook\.com\/([^\/]+)/)[1] + '/picture?type=square';
    }

    else {
      IMG = `${ENV.S3_URL}/${DEFAULT_LOGO}`;
    }

    return IMG
  }),

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