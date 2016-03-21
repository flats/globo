import MarkerLayer from 'ember-leaflet/components/marker-layer';
// import DraggableMixin from 'ember-leaflet/mixins/draggable';

export default MarkerLayer.extend({
  // init: function() {
  //   this._super();
    
  //   this._layer.off('click', L.marker.togglePopup);
  // },
  layerSetup() {
    this._super();
    // this._layer.off('click', L.marker.togglePopup);
    // this._layer.off('click');
    // this._layer.on('click', this._layer.togglePopup());
  },
  tripStateChanged: function() {
    this._layer.off('click');
    if (!this.get('addTripState')) {
      this._layer.on('click', this._layer.togglePopup);
    } else {
      this._layer.on('click', this.tripClick);
    }
  }.observes('addTripState'),

  // _click(e) {
  //   debugger;
  //   // if (!this.get('addTripState')) {
  //     this._layer.togglePopup();
  //   // }
  //   return false;
  // },

  tripClick() {
    return false;
  }

  // changeClick: function(){
  //   this.setProperties({  // more logic here
  //     someFlag: "foo",
  //     anotherFlag: "bar"
  //   });
  //   }.on("init")
  // }

  // _click(e) {
    // L.DomEvent.stopPropagation(e);
    // debugger;
  // },

  // _onMouseClick() {
    // debugger;
    // this._layer.off('click', L.marker.togglePopup)
  // }
      // L.DomUtil.addClass(icon, 'leaflet-clickable');
      // L.DomEvent.on(icon, 'click', this._onMouseClick, this);
      // L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

    // _click: function(e) {
    //   debugger;
    //   return false;
    // },
  // createLayer() {
  //   var newMarker = this.L.marker(...this.get('requiredOptions'), this.get('options'));
  //   newMarker.unbindPopup();
  //   return newMarker;
  // }
  // _eventHandlers: {
  //   click: function(e) {
  //     debugger;
  //     return false;
  //   },
  // },
  // _layer: {
  //   _onMouseClick() {
  //     debugger;
  //   }
  // }
  // _click: null,
  // usedLeafletEvents: null,
  // _addEventListeners: null,
  // onClick: null
  // _popupopen: function(e) {
  //   L.DomEvent.stopPropagation(e);
  //   debugger;
  //   alert('hi!');
  // }
  // dblclick: function(e) { alert('hi again!'); }
});