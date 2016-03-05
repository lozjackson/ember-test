import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:application', 'Unit | Controller | application', {
});

test('obj proxy', function(assert) {
  let controller = this.subject();

  let model = Ember.Object.create({
    name: 'foo'
  });
  controller.set('model', model);

  assert.equal(controller.get('model.name'), 'foo');
  assert.equal(controller.get('obj.name'), 'foo');

  model.set('name', 'bar');

  assert.equal(controller.get('model.name'), 'bar');
  assert.equal(controller.get('obj.name'), 'bar');
});
