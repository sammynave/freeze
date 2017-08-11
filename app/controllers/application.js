import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  freeze: task(function* () {
    let tree = yield this.store.findRecord('human', '1');
    this.store.unloadAll('choice');
  }),
});

