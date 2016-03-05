import { test } from 'qunit';
import moduleForAcceptance from 'ember-test/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | application');

/*
  This test passes in Ember v2.3.1
  but fails in Ember v2.4.1
*/
test('obj.name should be the same as model.name', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    /*
      `model` is an Ember.Object created on the route and set as the controller's `model`
    */
    assert.equal(Ember.$('#model-name').text().trim(), 'model.name: abc');

    /*
      `obj` is an Ember.ObjectProxy with the `model` object set as its `content`
      `obj.name` should be the same as `model.name`
    */
    assert.equal(Ember.$('#obj-name').text().trim(), 'obj.name: abc');
  });
});
