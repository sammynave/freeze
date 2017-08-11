import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    `some name for ${i}`;
  }
});
