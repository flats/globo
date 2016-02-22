import Ember from 'ember';

export default Ember.Component.extend({
  editState: false,
  actions: {
    editPin(){
      this.toggleProperty('editState');
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
