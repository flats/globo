import DS from 'ember-data';
import CollectionActionsMixin from 'ember-data-actions/mixins/collection';

var PlaceModel = DS.Model.extend({
  name: DS.attr('string'),
  lat: DS.attr('number'),
  long: DS.attr('number'),
  createdAt: DS.attr('date'),
  pins: DS.hasMany('pin')
});

PlaceModel.reopenClass(CollectionActionsMixin);

export default PlaceModel;
