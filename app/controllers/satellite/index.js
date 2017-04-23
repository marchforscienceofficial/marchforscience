import Ember from 'ember';

const { get, set } = Ember;

const DEFAULT_DONATE_LINK = "https://sciencedebate.org/march";
const DEFAULT_STORE_LINK = "http://marchforscienceshop.com/";
const DEFAULT_STORE_IMAGE = "https://dev.marchforscience.s3.amazonaws.com/ba8dd5ae8a8cd0f997e34057c004e19c";
const DEFAULT_MISSION_OBJ = [{"attributes":{"color":"#000000"},"insert":"It's time to get off the sidelines and make a difference."},{"attributes":{"header":2},"insert":"\n"},{"insert":"\nThe March for Science is the first step of a global movement to defend the vital role science plays in our health, safety, economies, and governments."},{"attributes":{},"insert":"\n"},{"insert":"\nThe March for Science champions robustly funded and publicly communicated science as a pillar of human freedom and prosperity. We unite as a diverse, nonpartisan group to call for science that upholds the common good and for political leaders and policy makers to enact evidence based policies in the public interest. \n\nThe March for Science is a celebration of science. It's not only about scientists and politicians; it is about the very real role that science plays in each of our lives and the need to respect and encourage research that gives us insight into the world. \n\nNevertheless, the march has generated a great deal of conversation around whether or not scientists should involve themselves in politics. In the face of an alarming trend toward discrediting scientific consensus and restricting scientific discovery, we might ask instead: can we afford not to speak out in its defense? \n\nThere is no Planet B. Join the "},{"attributes":{"bold":true},"insert":"#MarchForScience"},{"insert":". \n\n\n\n\n\n"}];

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  isAdmin: Ember.computed('model.admins', 'session.id', function(){
      var admins = get(this.model, 'admins');
      var uid = get(this, 'session.id');

      if (!admins || !uid) return false;

      for (let i=0;i<admins.length;i++){
        if (admins[i].id === uid) return true;
      }

      return false;

  }),

  mission: Ember.computed('model.parsedMission', function(){
      var mission = get(this.model, 'parsedMission');
      return mission && Array.isArray(mission) && mission.length ? mission : DEFAULT_MISSION_OBJ;
  }),

  donateLink: Ember.computed('model.donateLink', function(){
      var link = get(this.model, 'donateLink');
      return link && typeof link === 'string' ? link : DEFAULT_DONATE_LINK
  }),

  storeLink: Ember.computed('model.storeLink', function(){
      var link = get(this.model, 'storeLink');
      return link && typeof link === 'string' ? link : DEFAULT_STORE_LINK
  }),

  storeImage: Ember.computed('model.storeImage', function(){
      var link = get(this.model, 'storeImage');
      return link && typeof link === 'string' ? link : DEFAULT_STORE_IMAGE
  }),

  twitterUrl: Ember.computed('model.twitterUrl', function(){
    return get(this.model, 'twitterUrl') || 'https://www.twitter.com/scienceMarchDC';
  }),

  facebookUrl: Ember.computed('model.facebookUrl', function(){
    return encodeURIComponent(get(this.model, 'facebookUrl') || 'https://www.facebook.com/marchforscience');
  })



});