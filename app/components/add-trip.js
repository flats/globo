import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addDestination(){
      this.sendAction('addDestination', this.get('trip'));
    },

    submitTrip(){
      let trip = this.get('trip');
      // place.pin = this.get('pin');
      trip.save().then((savedTrip) => {
        savedTrip.get('destinations').invoke('save');
      });

    },

  }
});
