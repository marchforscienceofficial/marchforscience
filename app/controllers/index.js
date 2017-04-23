import Ember from 'ember';
const { set, get } = Ember;

import weekData from '../data/indexdata/indexdata';

const dayNames = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const todaysDate = new Date();
const today = todaysDate.getDay();

export default Ember.Controller.extend({
  init() {
    set(this, 'active', today);
    Ember.set(this, 'dayOfTheWeek', dayNames[today]);

  },
  actions: {
    clickTest(dayInt) {
      set(this, 'active', dayInt);
      set(this, 'dayOfTheWeek', dayNames[dayInt]);
      set(this, 'dayData', weekData[get(this, 'dayOfTheWeek')])
    }
  },
  dayData: weekData[dayNames[today]],
  active: 0,
  makeItSo: true
});
