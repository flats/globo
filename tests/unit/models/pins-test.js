import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pins', 'Unit | Model | pins', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:place']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
