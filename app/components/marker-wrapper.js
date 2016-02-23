import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pinClick(e) {
      // debugger;
      // e.originalEvent.preventDefault();
      // e.originalEvent.stopImmediatePropagation();
      // L.DomEvent.stopImmediatePropagation(e);
      // debugger
      // L.DomEvent.preventDefault(e);
      // L.DomEvent.stop(e);
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
