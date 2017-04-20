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

function orderPostsByTime(posts, timeKey) {
  let postsByTime = [];
  // TODO: should I use an Ember.Enumerable here instead?
  if (Ember.isArray(posts)) {
    postsByTime = posts.slice(0);
  } else {
    for (let postId in posts) {
      postsByTime.push(posts[postId]);
    }
  }

  postsByTime.sort(function(a, b) {
    return b[timeKey] - a[timeKey];
  });
  return postsByTime.splice(0,3)
}

//data conversion notes:
// I want data in the form of:
// postId: { datePosted: "", title: "", summary: ""}
function formatBlogData(host, response) {
  let parsedResponse;
  let posts;
  const parsedPosts = [];

  class Post {
    constructor(title, datePosted, summary, uniqueSlug) {
      this.title = title;
      this.datePosted = datePosted;
      this.summary = summary;
      this.uniqueSlug = uniqueSlug
    }
  }

  switch(host) {
    case "medium":
      const responseWierdness =  '])}while(1);</x>';
      parsedResponse = JSON.parse(response.slice(responseWierdness.length));
      posts = orderPostsByTime(parsedResponse.payload.references.Post, 'firstPublishedAt');
      posts.forEach(function(post) {
        const mediumPost = new Post(post.title, post.firstPublishedAt, post.content.subtitle, post.uniqueSlug);
          console.log(mediumPost);
          parsedPosts.push(mediumPost);
      });
      return parsedPosts;

    case "squarespace":
      console.log("these are the items!", response.items);
      posts = orderPostsByTime(response.items, 'publishedOn');
      posts.forEach(function(post) {
        const squarePost = new Post(post.title, post.publishOn, post.excerpt, post.fullUrl);
        console.log(squarePost);
        parsedPosts.push(squarePost);
      });
      return parsedPosts;

    case "wordpress":
      response.splice(0,3).forEach(function(post) {
        const wordpressPost = new Post(post.title.rendered, post.date, post.excerpt.rendered, post.link);
        console.log(wordpressPost);
        parsedPosts.push(wordpressPost);
      });
      return parsedPosts;
    default:
      return {title: "Create a blog and display it here!"};
  }
}
//TODO: this part should be editable based on admin access
const blogUrl = 'https://medium.com/@bryantaxs/latest';
const blogProvider = 'medium';
//
// const blogUrl = 'https://www.marchforscience.com/';
// const blogProvider = 'squarespace';
//
// const blogUrl = 'http://www.molecularecologist.com//wp-json/wp/v2/posts';
// const blogProvider = 'wordpress';

const listOfRecentPostBlogUrl = encodeURIComponent(`${blogUrl}?format=json`);

export default Ember.Component.extend({
  didReceiveAttrs() {
    switch(blogProvider) {
      case "medium":
        ajax(`/api/blog?url=${listOfRecentPostBlogUrl}`)
          .then((res) => set(this, 'recentBlogPosts', formatBlogData(blogProvider, res)));
        break;

      case "wordpress":
        ajax(blogUrl)
          .then((res) => set(this, 'recentBlogPosts', formatBlogData(blogProvider, res)));
        break;

      case "squarespace":
        // TODO: real response for square, rather than hardcoded
        // let placeholderSquareData = fakeSquareData();
        // set(this, 'recentBlogPosts', formatBlogData(blogProvider, placeholderSquareData));
        ajax(`/api/blog?url=${listOfRecentPostBlogUrl}`)
          .then((res) => set(this, 'recentBlogPosts', formatBlogData(blogProvider, res)));

    }
  },
  classNames: ['blog-widget'],
  blogUrl:  blogUrl
});
