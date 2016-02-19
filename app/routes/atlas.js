import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model() {
    return Ember.RSVP.hash({
      trips: this.store.findAll('trip'),
      pins: this.store.findAll('pin'),
      places:this.store.findAll('place'),
        // adding new, single pin
      newPin: this.store.createRecord('pin'),
       // adding new trip with multiple pins
      newTrip: this.store.createRecord('trip')
    });
  }
});
