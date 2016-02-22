import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// import CurrentUserHelper from '../helpers/current-user-helper';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  clicked: false,
  model() {
    return {
      trips: this.store.findAll('trip'),
      pins: this.store.findAll('pin'),
      places: this.store.findAll('place'),
        // adding new, single pin
      // newPin: this.store.createRecord('pin'),
       // adding new trip with multiple pins
      // newTrip: this.store.createRecord('trip')
    };
  },
  actions: {
    createPin(e) {
      this.set('newPin', this.store.createRecord('pin', {
        lat: e.latlng.lat,
        long: e.latlng.lng
      }));
      this.get('newPin').save();
    },

    linkPin(e){
      if (!this.get('clicked')){
        //only create trip on first pin click...
        this.toggleProperty('clicked');
        this.set('newTrip', this.store.createRecord('trip'));
      }
      //get the 'trip'...new or existing?
      this.get('newTrip');
      // for each pin clicked (e?), create destination and push object into trip.destinations

      //move this to when addTripState is rendered false?
      this.get('newTrip').save();
    }
  }
});
