import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lineClick(e) {
      this.sendAction('tripSmack', e);
    },
  }
});
