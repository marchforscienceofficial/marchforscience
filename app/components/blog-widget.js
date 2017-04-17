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

function orderPostsByTime(posts) {
  const postsByTime = [];

  for (let postId in posts) {
    postsByTime.push(posts[postId]);
  }
  postsByTime.sort(function(a, b) {
    return b.firstPublishedAt - a.firstPublishedAt;
  });
  return postsByTime.splice(0,3)
}

function formatBlogData(host, response) {
  switch(host) {
    case "medium":
      var responseWierdness =  '])}while(1);</x>';
      var parsedResponse = JSON.parse(response.slice(responseWierdness.length));
      var posts = orderPostsByTime(parsedResponse.payload.references.Post);
      console.log('posts loaded');
      return posts;
    case "square":
      console.log("square!");
      return response;
    default:
      console.log("create a blog!");
      return response;
  }
}
//TODO: this part should be editable based on admin access
const blogUrl = 'https://medium.com/@bryantaxs/';
const listOfRecentPostBlogUrl = encodeURIComponent(`${blogUrl}latest?format=json`);

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    ajax(`/api/blog?url=${listOfRecentPostBlogUrl}`).then((res) => set(this, 'recentBlogPosts', formatBlogData('medium', res)));
  },
  classNames: ['blog-widget'],
  blogUrl:  blogUrl
});
