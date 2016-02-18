/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'globo',
    environment: environment,
    contentSecurityPolicy: { 'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net http://connect.facebook.net", 'style-src': "'self' 'unsafe-inline'", 'default-src': "'self' http://staticxx.facebook.com https://www.facebook.com http://connect.facebook.net https://connect.facebook.net", 'img-src': "'self' https://www.facebook.com" },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey: process.env.FB_KEY,
          redirectUri: 'http://localhost:4200/dashboard'
        }
      }
    },

    'simple-auth': {
      authenticationRoute: 'session',
      authorizer: 'authorizer:application',
      crossOriginWhitelist: ['http://localhost:3000']
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
