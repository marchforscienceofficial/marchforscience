import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Route.extend({
  actions: {
    routeTab(route){
      this.transitionTo(route);
    },
    onSatelliteImageUpload(url){
      set(this.currentModel, 'logo', url);
    },
    onSatelliteBannerUpload(url){
      set(this.currentModel, 'banner', url);
    },
    onMissionChange(editor) {
      set(this.currentModel, 'mission', JSON.stringify(editor.getContents().ops));
    },
    saveChanges() {

      // Construct a proper data object to send from the model
      var data = {};
      var keys = ['logo', 'banner', 'mission'];
      keys.forEach((key) => { data[key] = get(this.currentModel, key); });
      debugger;
      // Send data to server
      $.ajax(`/api/satellites/${get(this.currentModel, 'id')}`, {
        method: 'PATCH',
        data: data
      }).then(() => {
        this.get('notifications').success('Saved successfully!');
        this.transitionTo('satellite', get(this.currentModel, 'id'));
      }, () => {
        this.get('notifications').error('Oops, something went wrong...');
      });
    },
    cancelChanges(){
      // satellite.rollbackAttributes();
      this.transitionTo('satellite', get(this.currentModel, 'id'))
    }
  },

  beforeModel(){

    // TODO: Redirect on invalid user

  },

  model(){
    return this.modelFor("satellite");
  }
});
