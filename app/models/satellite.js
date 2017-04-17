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

  admins: [],

  parsedMission: Ember.computed('mission', function(){
    try {
      return JSON.parse(get(this, 'mission'));
    } catch(e) { return []; }
  }),

  displayName: Ember.computed('city', 'state', function() {
    var city = this.get('city');
    var state = this.get('state');
    var country = country_data.countries[this.get('country')];
    country = country ? (country = country.name) : ''
    return `${city}, ${state ? state + ', ': ''}${country}`
  }),

  isAdmin: Ember.computed(function() {
    return true;
  })

});
