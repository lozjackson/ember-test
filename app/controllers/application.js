import Ember from 'ember';

export default Ember.Controller.extend({

  obj: Ember.computed('model', function () {
    return Ember.ObjectProxy.create({
  		content: this.get('model')
  	});
  })
});
