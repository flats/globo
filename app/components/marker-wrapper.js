import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pinClick() {
      this.sendAction('pinSmack');
    },
    savePin(pin){
      this.sendAction('savePin', pin);
      this.toggleProperty('editState');
    },
    deletePin(pin){
      this.sendAction('deletePin', pin);
    }
  }
});
