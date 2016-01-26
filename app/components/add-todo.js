import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    'submit': function submit() {
      const text = this.get('text');
      this.attrs.onAdd(text);
      this.set('text', '');
      this.$('input').focus();
    }
  }
});
