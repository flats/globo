import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// import CurrentUserHelper from '../helpers/current-user-helper';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  firstClick: false,
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
      //only create trip on first pin click...
      if (!this.get('firstClick')){
        this.toggleProperty('firstClick');
        this.set('newTrip', this.store.createRecord('trip'));
      }

      //get the 'trip', create new destination, get the pin w/ attrs
      let trip = this.get('newTrip');
      let destination = this.set('newDestination', this.store.createRecord('destination'));
      let pin = this.get('pin', e);

      //assign the destination the pin (belongs to)
      destination.pin = this.get(pin);

      //push the destination into the trip
      trip.destinations.pushObject(destination);

      //move this to when addTripState is rendered false?
      this.get('newTrip').save();

      //toggle 'clicked' false at the end of the process
    },

    // doneTripEditing action
  }
});
