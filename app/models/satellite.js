import DS from 'ember-data';
import Ember from 'ember';
import country_data from 'npm:country-data';
import ENV from '../config/environment';

const { get, set } = Ember;

const DEFAULT_LOGO = '801f9cad956f164b261a155c66c74a08';
const DEFAULT_BANNER = '0f2637cf6abf03124732a239f1873f31';

export default Ember.Object.extend({

  name: '',
  banner: `${ENV.S3_URL}/${DEFAULT_BANNER}`,
  logo: `${ENV.S3_URL}/${DEFAULT_LOGO}`,
  city: '',
  state: '',
  zip: '',
  country: '',
  latitude: '',
  longitude: '',
  mission: '',
  facebook: '',
  twitter: '',
  instagram: '',
  website: '',
  blog: '',
  blogType: '',
  email: '',

  admins: [],
  endorsements: [],
  sponsors: [],

  parsedMission: Ember.computed('mission', function(){
    try {
      return JSON.parse(get(this, 'mission'));
    } catch(e) { return []; }
  }),

  uriName: Ember.computed('city', 'state', 'country', function() {
    var city = this.get('city') || '';
    var state = this.get('state') || '';
    var country = this.get('country') || '';
    return window.encodeURIComponent((`${city}-${state ? state + '-': ''}${country}`).replace(/\s/g, '-').toLowerCase());
  }),

  displayName: Ember.computed('city', 'state', 'country', function() {
    var city = this.get('city');
    var state = this.get('state');
    var country = country_data.countries[this.get('country')];
    country = country ? (country = country.name) : ''
    return `${city}, ${state ? state + ', ': ''}${country}`
  }),

  parsedLogo: Ember.computed('facebook', 'twitter', 'logo', function(){

    var IMG = `${ENV.S3_URL}/${DEFAULT_LOGO}`;
    var logo = get(this, 'logo');
    var twitter = get(this, 'twitter')
    var facebook = get(this, 'facebook')

    if (logo){
      IMG = logo;
    }

    else if ( twitter ) {
      IMG = 'https://twitter.com/' + twitter.match(/twitter\.com\/([^\/]+)/)[1] + '/profile_image?size=original';
    }

    else if ( facebook ) {
      IMG = 'https://graph.facebook.com/' + facebook.match(/facebook\.com\/([^\/]+)/)[1] + '/picture?type=square';
    }

    return IMG
  })

});
