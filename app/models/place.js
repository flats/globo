import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lat: DS.attr('float'),
  long: DS.attr('float'),
  createdAt: DS.attr('date'),
  pins: DS.hasMany('pin')
});
