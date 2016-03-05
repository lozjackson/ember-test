import { test } from 'qunit';
import moduleForAcceptance from 'ember-test/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | application');

test('visiting /application', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.equal(Ember.$('#model-name').text().trim(), 'model.name: abc');
    assert.equal(Ember.$('#obj-name').text().trim(), 'obj.name: abc');
  });
});
