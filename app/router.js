import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pins');
  this.route('atlas');
  this.route('login');
});

export default Router;
