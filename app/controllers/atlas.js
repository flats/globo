/* globals L: false */
import Ember from 'ember';
import MarkerLayerComponent from 'ember-leaflet/components/marker-layer';

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
  addTripState: false,
  pastPins: true,
  futurePins: true,
  searchQuery: null,
  bounds: (function() {
    const southWest = L.latLng(SW_MAP_EDGE_X, SW_MAP_EDGE_Y);
    const northEast = L.latLng(NE_MAP_EDGE_X, NE_MAP_EDGE_Y);
    return L.latLngBounds(southWest, northEast);
  })(),
  actions:{

    addPinMode() {
      this.toggleProperty('addState');
      // $('.leaflet-map-pane').doubleClickZoom.disable();
    },


    addTripMode(){
      this.toggleProperty('addTripState');
    },

    //add click listener when tripMode is true
    pinSmack(pin, e) {
      if(this.get('addTripState')) {
        // debugger
        // e.stopPropogation();
        debugger;
        e.originalEvent.preventDefault();

        this.send('linkPin', pin);
      } else {
        return false;
      }
      // event.target.closePopup();

      return true;
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
    filterPast() {
      this.toggleProperty('pastPins');
    },
    filterFuture() {
      this.toggleProperty('futurePins');
    },
    savePin(pin) {
      pin.save();
    },
  }
});
