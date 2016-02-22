/* globals L: false */
import Ember from 'ember';
// import L from 'leaflet';

export default Ember.Controller.extend({
  hotel: [45.530891, -122.655504],
  lat: 0,
  lng: 0,
  zoom: 2,
  addState: false,
  searchQuery: null,
  bounds: (function() {
    var southWest = L.latLng(85, -180);
    var northEast = L.latLng(-85, 180);
    return L.latLngBounds(southWest, northEast);
  })(),
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
    findLocation() {
      var query = this.get('searchQuery');
      this.store.adapterFor('model-place').mapSearch(query).then((result) => {
        this.set('lat', result.lat);
        this.set('lng', result.long);
        this.set('zoom', 14);
      });
    },
    deletePin(pin) {
      pin.deleteRecord();
      pin.save();
    },
    savePin(pin) {
      pin.save();
    },
  }
});
