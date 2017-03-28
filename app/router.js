import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('satellites', function() {
    this.route('page', { path: '/:id' }, function() {
      this.route('admin');
    });
    this.route('admin');
  });
  this.route('profile');
});

export default Router;
