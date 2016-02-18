import DS from 'ember-data';

export default DS.Model.extend({
  trip: DS.belongsTo('trip'),
  pin: DS.belongsTo('pin'),
  createdAt: DS.attr('date'),
  nextId: DS.attr('integer'),
  first: DS.attr('boolean')
});
