import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageToggle() {
      this.set('isImageShowing', !this.get('isImageShowing'));
    }
  }
});
