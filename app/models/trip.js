import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date')
});
