import Ember from 'ember';

import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';  
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(LoginControllerMixin, UnauthenticatedRouteMixin);
