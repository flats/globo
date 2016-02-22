import DS from 'ember-data';


export default DS.Model.extend({
  nickname: DS.attr('string'),
  startDate: DS.attr('date'),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  place: DS.belongsTo('place'),
  createdAt: DS.attr('date'),
  destinations: DS.hasMany('destination'),
  lat: DS.attr('number'),
  long: DS.attr('number'),
  visited: DS.attr('boolean'),

  // coords: Ember.computed('lat', 'long', function(){
  //   return [this.get('lat'), this.get('long')];
  // })


});
