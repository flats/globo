import Ember from 'ember';

export default Ember.Component.extend({
  pin(){
    return this.findModel('pin').store.createRecord('drink');
  }
});
