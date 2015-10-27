import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('contacts', { path: '/' }, function() {
      this.route('get', { path: '/get/:id' });
    });
});

export default Router;