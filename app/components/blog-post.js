import Ember from 'ember';

export default Ember.Component.extend({
  linkToPost: Ember.computed('post', 'blogUrl', function() {
    return `${this.get('blogUrl')}${this.get('post.uniqueSlug')}`
  }),
  displayPostDate: Ember.computed('post', function() {
    const datePosted = this.get('post.datePosted');
    if (datePosted && !datePosted.isNaN) {
      return new Intl.DateTimeFormat().format(new Date(datePosted)) ;
    } else {
      return '';
    }
  })
});
