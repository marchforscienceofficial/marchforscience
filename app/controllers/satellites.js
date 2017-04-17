import Ember from 'ember';
import country_data from 'npm:country-data';

const { get, set } = Ember;

function displayName(city='', state='', country='') {
  var city = city;
  var state = state;
  var country = country_data.countries[country];
  country = country ? (country = country.name) : ''
  return `${city}, ${state ? state + ', ': ''}${country}`
}

export default Ember.Controller.extend({

  init(){
    this.satelliteQuery = this.satelliteQuery.bind(this);
  },

  satelliteQuery(query, syncResults) {
    const regex = new RegExp(`.*${query}.*`, 'i');
    var filtered = this.get('model.satellites').filter((item) => {
      item.displayName = displayName(item.city, item.state, item.country);
      return regex.test(item.displayName);
    });
    syncResults(filtered);
  },

  transformSelection(selection){
    return (selection) ? get(selection, 'displayName') : '';
  },

  satelliteCount: Ember.computed('model.satellites', function(){
    return this.get('model.satellites').length;
  }),

  actions: {
    selectSatelliteTypeahead(data){
      if (data) this.transitionToRoute('satellite', get(data, 'id'));
    }
  }

});