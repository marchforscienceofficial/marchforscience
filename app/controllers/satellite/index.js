import Ember from 'ember';
import country_data from 'npm:country-data';
import ENV from '../../config/environment';

const { get, set } = Ember;

const DEFAULT_LOGO = '801f9cad956f164b261a155c66c74a08';
const DEFAULT_BANNER = '0f2637cf6abf03124732a239f1873f31';

const DEFAULT_DONATE_LINK = "https://sciencedebate.org/march";
const DEFAULT_STORE_LINK = "http://marchforscienceshop.com/";
const DEFAULT_STORE_IMAGE = "https://marchforscience.s3.amazonaws.com/ba8dd5ae8a8cd0f997e34057c004e19c";
const DEFAULT_TWITTER_URI = "https://www.twitter.com/scienceMarchDC";
const DEFAULT_FACEBOOK_URI = "https://www.facebook.com/marchforscience";
const DEFAULT_INSTAGRAM_URI = "https://www.instagram.coms/sciencemarchdc";

const DEFAULT_MISSION_OBJ = [{"attributes":{"color":"#000000"},"insert":"It's time to get off the sidelines and make a difference."},{"attributes":{"header":2},"insert":"\n"},{"insert":"\nThe March for Science is the first step of a global movement to defend the vital role science plays in our health, safety, economies, and governments."},{"attributes":{},"insert":"\n"},{"insert":"\nThe March for Science champions robustly funded and publicly communicated science as a pillar of human freedom and prosperity. We unite as a diverse, nonpartisan group to call for science that upholds the common good and for political leaders and policy makers to enact evidence based policies in the public interest. \n\nThe March for Science is a celebration of science. It's not only about scientists and politicians; it is about the very real role that science plays in each of our lives and the need to respect and encourage research that gives us insight into the world. \n\nNevertheless, the march has generated a great deal of conversation around whether or not scientists should involve themselves in politics. In the face of an alarming trend toward discrediting scientific consensus and restricting scientific discovery, we might ask instead: can we afford not to speak out in its defense? \n\nThere is no Planet B. Join the "},{"attributes":{"bold":true},"insert":"#MarchForScience"},{"insert":". \n\n\n\n\n\n"}];

export default Ember.Controller.extend({

  actions: {
    toggleSubscribeModal(){
      this.toggleProperty('showSubscribeModal');
    }
  },

  showSubscribeModal: false,

  session: Ember.inject.service('session'),

  isAdmin: Ember.computed('model.admins', 'session.id', function(){
      var admins = get(this.model, 'admins');
      var uid = get(this, 'session.id');

      if (!admins || !uid) return false;

      for (let i=0;i<admins.length;i++){
        if (admins[i].id === uid) return true;
      }

      return false;

  }),

  currentUrl: Ember.computed(function(){
      return document.location.href;
  }),

  mission: Ember.computed('model.parsedMission', function(){
      var mission = get(this.model, 'parsedMission');
      return mission && Array.isArray(mission) && mission.length ? mission : DEFAULT_MISSION_OBJ;
  }),

  donateLink: Ember.computed('model.donateLink', function(){
      var link = get(this.model, 'donateLink');
      return link && typeof link === 'string' ? link : DEFAULT_DONATE_LINK
  }),

  storeLink: Ember.computed('model.storeLink', function(){
      var link = get(this.model, 'storeLink');
      return link && typeof link === 'string' ? link : DEFAULT_STORE_LINK
  }),

  storeImage: Ember.computed('model.storeImage', function(){
      var link = get(this.model, 'storeImage');
      return link && typeof link === 'string' ? link : DEFAULT_STORE_IMAGE
  }),

  twitter: Ember.computed('model.twitter', function(){
    return get(this.model, 'twitter') || DEFAULT_TWITTER_URI;
  }),

  facebook: Ember.computed('model.facebook', function(){
    return encodeURIComponent(get(this.model, 'facebook') || DEFAULT_FACEBOOK_URI);
  }),

  instagram: Ember.computed('model.instagram', function(){
    return get(this.model, 'instagram') || DEFAULT_INSTAGRAM_URI;
  }),

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
  })

});