import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('satellites');
  this.route('satellite', { path: 'satellite/:id' }, function() {
    this.route('admin', function() {
      this.route('email');
    });
  });
  this.route('profile');
});

export default Router;
