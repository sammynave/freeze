import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  chosen: belongsTo('choice'),
  choices: hasMany('choice'),
});
