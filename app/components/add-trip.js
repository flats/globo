import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    closeTripWindow(){
      this.sendAction('closeTripWindow');
    },
    reorderDestination(destination,operator){
      this.sendAction('reorderDestination', [destination,operator]);
    }
  }
});
