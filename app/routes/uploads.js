import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('song');
  },
  actions: {
    save: function() {
      debugger
      var song = this.currentModel;
      song.save().then(() => {
        this.transitionTo('songs');
      });
    }
  }
});
