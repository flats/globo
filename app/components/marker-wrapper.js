import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pinClick(e) {
      // debugger;
      this.sendAction('pinSmack', e);
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
