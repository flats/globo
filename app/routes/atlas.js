import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      trips: this.store.findAll('trip'),
      pins: this.store.findAll('pin'),
      places:this.store.findAll('place'),
      newPin: this.store.createRecord('pin'),
      newPlace: this.store.createRecord('place')
    });
  }
  // actions:{
  //   addPin(){
  //     let pin = this.modelFor((this.routeName).newPin);
  //     pin.save();
  //   }
  // }

});
