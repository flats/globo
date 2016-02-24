/* globals L: false */
import Ember from 'ember';


const INITIAL_LAT = 20;
const INITIAL_LONG = 0;
const INITIAL_ZOOM = 2;
const SW_MAP_EDGE_X = 85;
const SW_MAP_EDGE_Y = -180;
const NE_MAP_EDGE_X = -85;
const NE_MAP_EDGE_Y = 180;
const TEXT_SEARCH_ZOOM = 14;

export default Ember.Controller.extend({
  lat: INITIAL_LAT,
  lng: INITIAL_LONG,
  zoom: INITIAL_ZOOM,
  addState: false,
  addTripState: false,

  pastPins: true,
  futurePins: true,
  searchQuery: null,
  lineColor: ["#ee133f", "#00000", "#ad44fa", "#ee133f", "#00000", "#ad44fa", "#ee133f", "#00000", "#ad44fa"],
  bounds: (function() {
    const southWest = L.latLng(SW_MAP_EDGE_X, SW_MAP_EDGE_Y);
    const northEast = L.latLng(NE_MAP_EDGE_X, NE_MAP_EDGE_Y);
    return L.latLngBounds(southWest, northEast);
  })(),
  tripListener: Ember.computed('addTripState', 'currentTrip',function(){
      if (this.get('addTripState') === true || this.get('currentTrip') != null ){
        return true;
      } else{
        return false;
      }
    }),


  actions:{

    addPinMode() {
      this.toggleProperty('addState');
      let addTripState = this.get('addTripState');
      if (addTripState === true) {
        this.toggleProperty('addTripState');
      }
      // $('.leaflet-map-pane').doubleClickZoom.disable();
    },

    addTripMode(){
      this.toggleProperty('addTripState');

      //reset currentTrip so trip window won't persist
      this.set('currentTrip', null);
      this.send('resetFirstClick');

      let addPinState = this.get('addState');
      if (addPinState === true) {
        this.toggleProperty('addState');
      }

    },

    //add click listener when tripMode is true
    pinSmack(pin) {
      if(this.get('addTripState')) {
        this.send('linkPin', pin);
      } else {
        return false;
      }
      return true;
    },

    addPoint(e) {
      if(this.get('addState')) {
        this.send('createPin', e);
        // e.target.doubleClickZoom.enable();
        return true;
      }
    },
    tripSmack(trip) {
      this.set('currentTrip', trip);
    },

    closeTripWindow(){
      this.set('currentTrip', null);
      this.set('addTripMode', false);
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
      var destinations = pin.get('destinations');
      destinations.forEach(
           function(destination){
             destination.destroyRecord();
             destination.save();
           }
         );
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
