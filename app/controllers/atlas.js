import Ember from 'ember';

export default Ember.Controller.extend({
  hotel: [45.530891, -122.655504],
  lat: 0,
  lng: 0,
  zoom: 2,
  addState: true,
  actions:{
    addDestination(){
      let trip = this.get('model.newTrip');
      let destination = this.store.createRecord('destination');
      trip.get('destinations').addObject(destination);
    },
    addPoint(e) {
      if(this.get('addState')) {
        this.send('createPin', e);
        return true;
      } else {
        // e.target.doubleClickZoom.enable();
        // this.set('addState', true);
      }
    },
    delete(pin) {
      pin.destroyRecord();
      pin.save();
    }
  }
});
