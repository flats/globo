import Ember from 'ember';

export default Ember.Controller.extend({
  hotel: [45.530891, -122.655504],
  lat: 0,
  lng: 0,
  zoom: 2,

  actions:{
    addDestination(){
      let trip = this.get('model.newTrip');
      let destination = this.store.createRecord('destination');
      //why u made bro
      // debugger;
      trip.get('destinations').addObject(destination);
    }
  }
});
