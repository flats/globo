import MarkerLayer from 'ember-leaflet/components/marker-layer';
// import DraggableMixin from 'ember-leaflet/mixins/draggable';

export default MarkerLayer.extend({
  _click(e) {
    if (this.get('addTripState')) {
      Ember.run.later( () => {
        this._layer.togglePopup();
      }, 2000);
    }
  }
});