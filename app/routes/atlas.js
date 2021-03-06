import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// import CurrentUserHelper from '../helpers/current-user-helper';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  firstClick: false,
  model() {
    return {
      trips: this.store.findAll('trip'),
      pins: this.store.findAll('pin'),
      places: this.store.findAll('place'),
      destinations: this.store.findAll('destination'),
    };
  },
  actions: {
    createPin(e) {
      this.set('newPin', this.store.createRecord('pin', {
        lat: e.latlng.lat,
        long: e.latlng.lng
      }));
      this.get('newPin').save();
    },
    resetFirstClick(){
      this.set('firstClick', false);
    },
    linkPin(pin){
      //only create trip on first pin click...
      // debugger;
      let destination = this.set('newDestination', this.store.createRecord('destination'));
      destination.set('pin', pin);

      if (!this.get('firstClick')){
        this.toggleProperty('firstClick');
        this.set('newTrip', this.store.createRecord('trip'));
      }

      var newTrip = this.get('newTrip');
      this.controllerFor(this.routeName).set('currentTrip', newTrip);

      newTrip.save().then(() => {
        destination.set('trip', newTrip);
        destination.save();
      });
    }
  }
});
