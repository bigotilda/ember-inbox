import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  key: attr(),
  subject: attr(),
  body: attr(),
  from: attr()
});
