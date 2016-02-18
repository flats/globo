import Ember from 'ember';

export default Ember.Controller.extend({
  hotel: [45.530891, -122.655504],
  coordsFor: Ember.computed.map('model.@each.place', function(pin, index) {
    return [pin.get('place.lat'), pin.get('place.long')];
  }),
  // WHat is this for?
  model(){
    return Ember.RSVP.hash({
      names: this.modelFor(this.routeName).get('name')
    });

  }
});
