import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AdapterActionsMixin from 'ember-data-actions/mixins/adapter';


export default ActiveModelAdapter.extend(DataAdapterMixin,{
  host: "http://localhost:3000",
  authorizer: "authorizer:devise"
});
