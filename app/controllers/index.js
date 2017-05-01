import Ember from 'ember';
const { set, get } = Ember;

export default Ember.Controller.extend({
  
  satellites: Ember.inject.service('satellites'),

  actions: {
    toggleSubscribeModal(){
      this.toggleProperty('showSubscribeModal');
      ga('send', 'event', 'home-page', 'click', 'show-subscribe-modal');
    },
    clickTrack(label, value){
      if (!ga) console.error('Google Analytics not loaded');
      console.log('Tracking:', 'send', 'event', 'home-page', 'click', label, value);
      ga('send', 'event', 'home-page', 'click', label);
    },
    toggleSubscribePopover(){
      this.toggleProperty('showSubscribePopover');
    }
  },

  showSubscribeModal: false,
  showSubscribePopover: true

});
