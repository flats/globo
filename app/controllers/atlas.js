import Ember from 'ember';

export default Ember.Controller.extend({
  hotel: [45.530891, -122.655504],
  lat: 0,
  lng: 0,
  zoom: 2,
  addState: false,
  actions:{
    addDestination(){
      let trip = this.get('model.newTrip');
      let destination = this.store.createRecord('destination');
      trip.get('destinations').addObject(destination);
    },
    addPinMode() {
      this.toggleProperty('addState');
      // $('.leaflet-map-pane').doubleClickZoom.disable();
    },
    addPoint(e) {
      if(this.get('addState')) {
        this.send('createPin', e);
        // e.target.doubleClickZoom.enable();
        return true;
      }
    },
    deletePin(pin) {
      pin.deleteRecord();
      pin.save();
    }
  }
});
