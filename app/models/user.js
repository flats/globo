import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  createdAt: DS.attr('date')
});
