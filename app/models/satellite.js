import DS from 'ember-data';
import Ember from 'ember';
import country_data from 'npm:country-data';

export default DS.Model.extend({
  name: DS.attr(),
  banner: DS.attr(),
  logo: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zip: DS.attr(),
  country: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),

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
