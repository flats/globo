import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register(){
      var newUser = this.store.createRecord('user', {
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password')
      });
      newUser.save();
      //add 'then' function if success...not working?
      this.transitionToRoute('login');
    }
  }
});
