import Ember from 'ember';
const { set } = Ember;

const dayArray = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const todaysDate = new Date();
const today = todaysDate.getDay();

export default Ember.Controller.extend({
  init() {
    // Ember.set(this, 'dayOfTheWeek', thisDay);
    set(this, 'active', today);
    Ember.set(this, 'dayOfTheWeek', dayArray[today]);

  },
  actions: {
    clickTest(dayInt) {
      set(this, 'active', dayInt);
      set(this, 'dayOfTheWeek', dayArray[dayInt])
    }
  },

  active: 0,

});
