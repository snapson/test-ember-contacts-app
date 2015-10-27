import DS from 'ember-data';

export default DS.Model.extend({
  picture: DS.attr('string'),
  name: DS.attr('string'),
  company: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  address: DS.attr('string')
});
