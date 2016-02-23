import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import ENV from 'globo/config/environment';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: (function() {
      if (ENV.environment === 'development') {
        return "http://localhost:3000/users/sign_in";
      } else {
        return "http://globo-api.herokuapp.com/users/sign_in";
      }
    })()
});
