import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addDestination(){
      this.sendAction('addDestination', this.get('trip'));
    },

    submitTrip(){
      let trip = this.get('pin');
      // place.pin = this.get('pin');
      trip.save();

    },

  }
});
