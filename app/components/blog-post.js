import Ember from 'ember';

export default Ember.Component.extend({
  linkToPost: Ember.computed('post', 'blogUrl', function() {
    return `${this.get('blogUrl')}${this.get('post.uniqueSlug')}`
  }),
  displayPostDate: Ember.computed('post', function() {
    const date = new Date(this.get('post.firstPublishedAt'));
    return new Intl.DateTimeFormat().format(date) ;
  })
});
