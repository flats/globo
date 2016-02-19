import DS from 'ember-data';

export default DS.Model.extend({
  trip: DS.belongsTo('trip'),
  pin: DS.belongsTo('pin'),
  createdAt: DS.attr('date'),
  nextId: DS.attr('integer'),
  first: DS.attr('boolean'),
  // pin info
  nickname: DS.attr('string'),
  startDate: DS.attr('date'),
  description: DS.attr('string'),
  lat: DS.attr('number'),
  long: DS.attr('number')
});
