import Ember from 'ember';

export default Ember.Controller.extend({

  /*
    This is a computed property that returns an `Ember.ObjectProxy` object.  The
    `content` of the ObjectProxy is the `model`.
  */
  obj: Ember.computed('model', function () {
    return Ember.ObjectProxy.create({
  		content: this.get('model')
  	});
  })
});
