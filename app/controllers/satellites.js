import Ember from 'ember';

export default Ember.Controller.extend({

  init(){
    this.satelliteQuery = this.satelliteQuery.bind(this);
  },

  satelliteQuery(query, syncResults) {
    const regex = new RegExp(`.*${query}.*`, 'i');
    var filtered = this.get('model.satellites').filter((item) => {
      return regex.test(item.get('displayName'));
    });
    syncResults(filtered);
  },

  transformSelection(selection){
    return (selection && selection.get) ? selection.get('displayName') : '';
  },

  satelliteCount: Ember.computed('model.satellites', function(){
    return this.get('model.satellites').length;
  }),

  actions: {
    selectSatelliteTypeahead(data){
      if (data) this.transitionToRoute('satellite', data.get('id'));
    }
  }

});