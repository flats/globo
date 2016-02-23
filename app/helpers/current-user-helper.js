import Ember from 'ember';
import ENV from 'globo/config/environment';

export default Ember.CurrentUserHelper = {
  beforeModel: function() {
    if (!this.controllerFor('application').get('currentUser')) {
      if (ENV.environment === 'development') {
        var auth_deferred = $.get('http://localhost:3000/users');
      } else {
        var auth_deferred = $.get('http://globo.website');
      }

      auth_deferred.then(function(user) {
        this.controllerFor('application').set('currentUser', user);
      }.bind(this));

      return auth_deferred;
    }
  },
  currentUser: function() {
    return this.controllerFor('application').get('currentUser');
  }.property()
};
