import Ember from 'ember';

const { get, set } = Ember;

// Keys we will send to the server
const savedKeys = [ 'logo', 'banner', 'mission', 'storeLink', 'storeImage', 'donateLink' ];

export default Ember.Route.extend({
  actions: {
    routeTab(route){
      this.transitionTo(route);
    },

    onImageUpload(url, key){
      set(this.currentModel, url, key);
    },

    onMissionChange(editor) {
      set(this.currentModel, 'mission', JSON.stringify(editor.getContents().ops));
    },

    saveChanges() {

      // Construct a proper data object to send from the model
      var data = {};
      savedKeys.forEach((key) => { data[key] = get(this.currentModel, key); });

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
