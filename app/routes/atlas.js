import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// import CurrentUserHelper from '../helpers/current-user-helper';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  model() {
    return {
      trips: this.store.findAll('trip'),
      pins: this.store.findAll('pin'),
      places: this.store.findAll('place'),
        // adding new, single pin
      // newPin: this.store.createRecord('pin'),
       // adding new trip with multiple pins

      newTrip: this.store.createRecord('trip')
    };
  },
  actions: {
    createPin(e) {
      this.set('newPin', this.store.createRecord('pin', {
        lat: e.latlng.lat,
        long: e.latlng.lng
      }));
      this.get('newPin').save();
    }
  }
});
