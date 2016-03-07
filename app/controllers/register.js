import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register(){
      // debugger;
      var newUser = this.store.createRecord('user', {
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password')
      });
      // newUser.save();
      debugger;
      this.transitionToRoute('login');
    }
  }
});
