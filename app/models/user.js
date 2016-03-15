import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  createdAt: DS.attr('date'),
  pins: DS.hasMany('pin'),
  trips: DS.hasMany('trip'),
  password: DS.attr('string')
});
