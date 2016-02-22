/* globals L: false */
import Ember from 'ember';

const INITIAL_ZOOM = 2;
const SW_MAP_EDGE_X = 85;
const SW_MAP_EDGE_Y = -180;
const NE_MAP_EDGE_X = -85;
const NE_MAP_EDGE_Y = 180;
const TEXT_SEARCH_ZOOM = 14;

export default Ember.Controller.extend({
  lat: 0,
  lng: 0,
  zoom: 2,
  addState: false,
  searchQuery: null,
  bounds: (function() {
    const southWest = L.latLng(SW_MAP_EDGE_X, SW_MAP_EDGE_Y);
    const northEast = L.latLng(NE_MAP_EDGE_X, NE_MAP_EDGE_Y);
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
      const query = this.get('searchQuery');
      this.store.adapterFor('model-place').mapSearch(query).then((result) => {
        this.set('lat', result.lat);
        this.set('lng', result.long);
        this.set('zoom', TEXT_SEARCH_ZOOM);
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
