import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  startDate: DS.attr('date'),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  place: DS.belongsTo('place'),
  createdAt: DS.attr('date'),
  destinations: DS.hasMany('destination'),
  // coords: DS.attr(''),
  lat: DS.attr('number'),
  long: DS.attr('number')
});