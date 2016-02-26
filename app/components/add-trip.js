import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    closeTripWindow(){
      this.sendAction('closeTripWindow');
    },
    poneDestination(destination,operator){
      this.sendAction('poneDestination', [destination,operator]);
    }
  }
});
