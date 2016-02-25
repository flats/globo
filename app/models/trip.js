import DS from 'ember-data';
import Ember from 'ember';
/* globals L: false */


export default DS.Model.extend({
  name: DS.attr('string'),
  web_color: DS.attr('string'),
  startDate: DS.attr('date'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  destinations: DS.hasMany('destination'),

  pinPoints: Ember.computed('destinations', function(){
    let locationArray = [];
    this.get('destinations').forEach(function(destination){
      let pin = destination.get('pin');
      let coords = L.latLng(pin.get('lat'), pin.get('long'));
      locationArray.push(coords);
    });
    return locationArray;
  }),
  visitedDestinations: Ember.computed.filterBy('destinations', 'pin.visited', true),
  traveled: Ember.computed.notEmpty('visitedDestinations'),
  // pinsChange: Ember.observer('travelled', function() {
  //   // deal with the change
  // })

  // traveled: Ember.computed('destinations', function(){
  //   let bool = false;
  //   this.get('destinations').forEach(function(destination){
  //     let pin = destination.get('pin');
  //     if (pin.get('visited')){
  //       bool = true;
  //     }
  //   });
  //   return bool;
  // })

});
