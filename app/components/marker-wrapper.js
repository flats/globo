import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pinClick() {
      this.sendAction('pinSmack');
    }
  }
});
