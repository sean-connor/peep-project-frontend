import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('string'),
  album: DS.attr('string'),
  songurl: DS.attr('string'),
  art: DS.attr('string'),
  plays: DS.attr('number')
});
