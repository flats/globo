import Ember from 'ember';

export default Ember.CurrentUserHelper = {
  beforeModel: function() {
    if (!this.controllerFor('application').get('currentUser')) {
      var auth_deferred = $.get('/');

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
