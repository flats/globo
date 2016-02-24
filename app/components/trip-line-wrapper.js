import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lineClick(e) {
      // debugger;
      this.sendAction('tripSmack', e);
    },
  }
});
