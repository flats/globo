import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    closeTripWindow(){
    // debugger;
      this.sendAction('closeTripWindow');
    }

  }
});
