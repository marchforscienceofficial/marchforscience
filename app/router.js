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
      this.route('about');
      this.route('resources');
      this.route('events');
    });
  });
  this.route('profile');
  this.route('verified');
  this.route('vision');
  this.route('login', function() {
    this.route('verify');
  });
});

export default Router;
