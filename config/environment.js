/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'globo',
    environment: environment,
    contentSecurityPolicy: {
    'default-src': "'self'",
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' .gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com *",
    'img-src': "'self' 'unsafe-inline' maps.gstatic.com csi.gstatic.com http://*.basemaps.cartocdn.com/",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com" },

    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    'ember-simple-auth': {
      routeAfterAuthentication: 'atlas',
      routeIfAlreadyAuthenticated: 'atlas'
    },

    // gmap: {
    //   key: process.env.GOOGLE_KEY,
    // },
    // torii: {
    //   providers: {
    //     'facebook-connect': {
    //       appId: process.env.FB_KEY,
    //       scope: 'email'
    //     }
    //   }
    // },

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
