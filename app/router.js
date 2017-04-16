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
      this.route('team');
      this.route('message');
    });
  });
  this.route('profile');
  this.route('satellite.admin.index');
  this.route('satellite.admin.team');
});

export default Router;
