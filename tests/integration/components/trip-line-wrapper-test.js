import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trip-line-wrapper', 'Integration | Component | trip line wrapper', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{trip-line-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#trip-line-wrapper}}
      template block text
    {{/trip-line-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
