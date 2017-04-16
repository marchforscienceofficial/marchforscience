import Ember from 'ember';
const { get, set, run, $, RSVP } = Ember;

function ajax (url, options) {
  return new RSVP.Promise(function (resolve, reject) {
    options = options || {};
    options.url = url;

    options.success = function (data) {
      run(null, resolve, data);
    };

    options.error = function (jqxhr, status, something) {
      run(null, reject, arguments);
    };

    $.ajax(options);
  });
}

function formatBlogData(host, response) {
  switch(host) {
    case "medium":
      var responseWierdness =  '])}while(1);</x>';
      var parsedResponse = response.slice(responseWierdness.length);
      console.log("medium!");
      return parsedResponse;
    case "square":
      console.log("square!");
      return response;
    default:
      console.log("create a blog!");
      return response;
  }
}

const listOfRecentPostBlogUrl = encodeURIComponent("https://medium.com/@bryantaxs/latest?format=json");

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    ajax(`/api/blog?url=${listOfRecentPostBlogUrl}`).then((res) => set(this, 'recentBlogPosts', formatBlogData('medium', res)));
  },
});
