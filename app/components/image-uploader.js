import Ember from 'ember'
const { get, set, computed } = Ember
const { service } = Ember.inject

export default Ember.Component.extend({

  init(){
    this._super(...arguments);
    this.uploadImage = this.uploadImage.bind(this);
  },

  classNames: ['image-uploader'],
  amazonS3: service(),

  url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',

  uploadImage(file){
    return new Promise((resolve, reject) => {
      const fileName = `${file.name}-${Date.now()}`
      const fileType = file.type;
      this.get('amazonS3').upload(fileName, fileType, file).then((url) => {
        this.set('url', url);
        this.get('notifications').success('File uploaded successfully');
        var onUpload = this.get('onUpload');
        onUpload && onUpload(url);
      }, () => {
        this.get('notifications').error('Error uploading file');
      });
    });
  },

  actions: {
    fileLoaded: function(file) {
      this.uploadImage(file)
    }
  }
})