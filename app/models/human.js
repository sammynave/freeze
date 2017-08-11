import Model from 'ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  chosen: belongsTo('choice', { inverse: null }),
  choices: hasMany('choice', { inverse: null })
});
