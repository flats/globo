import DS from 'ember-data';
import Ember from 'ember';
/* globals L: false */


export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  destinations: DS.hasMany('destination'),

  pinPoints: Ember.computed('destinations', function(){
    let locationArray = [];
    this.get('destinations').forEach(function(destination){
      let coords = L.latLng(destination.pin.lat, destination.pin.long);
      locationArray.push(coords);
      // locationArray.push(destination);
    });
    return locationArray;
    // return this.get('destinations');

  })
});
