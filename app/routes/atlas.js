import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },
  pins() {
    return this.store.findAll('pin');
  },
  trips() {
    return this.store.findAll('trip');
  }

});
