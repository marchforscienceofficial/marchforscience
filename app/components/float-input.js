import Ember from 'ember';

var uid = 0;

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set('id', uid++);
  },
  tagName: 'float-input',
  type: 'text',
  required: false,
  value: '',
  hasValue: Ember.computed('value', function(){
    return !!this.get('value');
  }),
  actions: {
    onInput(event){
      this.set('value', event.target.value);
    }
  }
});
