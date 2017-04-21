import Ember from 'ember';
import country_data from 'npm:country-data';
import customSuggestionTemplate from '../templates/components/satellite-typeahead/suggestion';

const { get, set } = Ember;

function displayName(city='', state='', country='') {
  var city = city;
  var state = state;
  var country = country_data.countries[country];
  country = country ? (country = country.name) : ''
  return `${city}, ${state ? state + ', ': ''}${country}`
}

export default Ember.Controller.extend({

  satellites: Ember.inject.service('satellites'),

  init(){
    this.satelliteQuery = this.satelliteQuery.bind(this);
  },

  customSuggestionTemplate: customSuggestionTemplate,

  satelliteQuery(query, syncResults) {
    const regex = new RegExp(`.*${query}.*`, 'i');

    var filtered = this.get('satellites.list').filter((item) => {
      console.log(item, get(item, 'displayName'))
      return regex.test(get(item, 'displayName'));
    });
    syncResults(filtered);
  },

  transformSelection(selection){
    return (selection) ? get(selection, 'displayName') : '';
  },

  satelliteCount: Ember.computed('satellites.list', function(){
    return (this.get('satellites.list') || []).length;
  }),

  actions: {
    selectSatelliteTypeahead(data){
      debugger;
      if (data) this.transitionToRoute('satellite', get(data, 'uriName'));
      return false;
    }
  }

});