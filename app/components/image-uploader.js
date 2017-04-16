import Ember from 'ember'
const { get, set, computed } = Ember
const { service } = Ember.inject

export default Ember.Component.extend({

  init(){
    this._super(...arguments);
    this.uploadImage = this.uploadImage.bind(this);
  },

  amazonS3: service(),

  uploadImage(file){
    return new Promise((resolve, reject) => {
      const fileName = `${file.name}-${Date.now()}`
      const fileType = file.type;
      this.get('amazonS3').upload(fileName, fileType, file.data).then((url) => {
        this.set('url', url);
      });
    });
  },

  actions: {
    fileLoaded: function(file) {
      console.log(arguments);
      this.uploadImage(file)
    }
  }
})