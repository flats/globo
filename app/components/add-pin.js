import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submitPin(){
      let place = this.get('place');
      place.pin = this.get('pin');
      place.save().then((savedPlace) => {
        savedPlace.get('pin').invoke('save');
      });
    }
  }
});
