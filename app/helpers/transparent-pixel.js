import Ember from 'ember';

export function transparentPixel(params/*, hash*/) {
  return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
}

export default Ember.Helper.helper(transparentPixel);
