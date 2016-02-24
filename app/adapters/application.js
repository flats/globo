import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'globo/config/environment';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: "http://localhost:3000",
  host: (function() {
    if (ENV.environment === 'development') {
      return "http://localhost:3000";
    } else {
      return "https://globo-api.herokuapp.com";
    }
  })(),
  authorizer: "authorizer:devise",
  mapSearch: function(query) {
    var urlParts = [ this.urlPrefix(), 'places', 'search?query=' ];
    return this.ajax(urlParts.join('/') + query, 'get').then(function(response) {
      return response.place;
    });
  }

});
