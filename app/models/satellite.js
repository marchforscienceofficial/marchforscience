import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  banner: DS.attr(),
  logo: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zip: DS.attr(),
  country: DS.attr()
});
