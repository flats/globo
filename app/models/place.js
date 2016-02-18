import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lat: DS.attr('number'),
  long: DS.attr('number'),
  createdAt: DS.attr('date'),
  pins: DS.hasMany('pin')
});
