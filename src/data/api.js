var match = document.cookie.match(/ACCESS_TOKEN=([^;]+)/);
var ACCESS_TOKEN = (match && match[1]) || '';

var match = document.cookie.match(/USER_ID=([^;]+)/);
var USER_ID = (match && match[1]) || '';

const API = {

  isAuthenticated() {
    return !!ACCESS_TOKEN && !!USER_ID;
  },

  get token(){ return ACCESS_TOKEN; },
  get userId(){ return USER_ID; },

  get(url){
    url += `${!!~url.indexOf('?') ? '&' : '?'}access_token=${ACCESS_TOKEN}`;
    return window.fetch(url)
      .then(function(resp){

        if (resp.status !== 200) {
          // alert("Oops! Something went wrong. Please refresh the page and try again.");
        }

        return resp.json();
      });
  },

  post(url, data={}){
    url += `${!!~url.indexOf('?') ? '&' : '?'}access_token=${ACCESS_TOKEN}`;
    return window.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(function(resp){

        if (resp.status !== 200) {
          // alert("Oops! Something went wrong. Please refresh the page and try again.");
        }

        return resp.json();
      })
      .then(function(data){
        if (!!~url.indexOf('/api/users/login')){
          ACCESS_TOKEN = data.id;
          document.cookie = `ACCESS_TOKEN=${ACCESS_TOKEN}; expires=${new Date(Date.now() + data.ttl).toUTCString()}`;

          USER_ID = data.userId;
          document.cookie = `USER_ID=${USER_ID}; expires=${new Date(Date.now() + data.ttl).toUTCString()}`;

        }
        return data;
      });
  }
};

export default API;