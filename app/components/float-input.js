import Ember from 'ember';

var uid = 0;

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set('id', uid++);
    this.set('hasValue', !!this.get('value'));

  },
  tagName: 'float-input',
  type: 'text',
  required: false,
  actions: {
    onInput(event){
      let val = event.target.value;
      this.set('hasValue', !!val);
      this.set('value', val);
    }
  }
});
