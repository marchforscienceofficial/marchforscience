import Ember from 'ember';

export default Ember.Service.extend({
  upload(name, type, data) {

    return $.ajax('/api/s3-token', {
      method: 'POST',
      data: {file: name, type: type}
    })
    .then( (resp) => {
      console.log(resp)
      return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", resp.signedRequest);
        xhr.setRequestHeader('x-amz-acl', 'public-read');
        xhr.onload = () => { resolve() }
        xhr.send(data);
      });
    })

  }
})