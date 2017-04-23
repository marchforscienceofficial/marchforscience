import Ember from 'ember';

export default Ember.Component.extend({

  onDismiss(){},

  actions: {
    toggleHide(){
      this.get('onDismiss')();
    }
  }
});
