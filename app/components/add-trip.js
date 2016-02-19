import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submitTrip(){
      
      let pin = this.get('pin');
      // place.pin = this.get('pin');
      pin.save();

    }
  }
});
