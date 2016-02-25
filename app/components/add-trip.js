import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    closeTripWindow(){
      this.sendAction('closeTripWindow');
    },
    saveDestination(destination){
      this.sendAction('saveDestination');
    }
  }
});
