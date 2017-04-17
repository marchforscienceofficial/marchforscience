import Ember from 'ember';

export default Ember.Component.extend({
  linkToPost: Ember.computed('post', 'blogUrl', function() {
    return `${this.get('blogUrl')}${this.get('post.uniqueSlug')}`
  })
});
