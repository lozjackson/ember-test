# Ember-test

This app has an acceptance test `tests/acceptance/application-test.js` that fails when using Ember v2.4.1

It passes with Ember v.2.3.1

The problem seems to be the `with` helper when using an `Ember.ObjectProxy`  

```
{{model}} // => Ember.Object
{{model.name}} // => 'abc'

{{obj}} // => Ember.ObjectProxy

{{#with obj as |model|}}

  {{model}} // => true (should be the same as `obj`)
  {{model.name}} // => `undefined`

{{/with}}
```
