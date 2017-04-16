import Ember from 'ember';
import md5 from 'npm:blueimp-md5';

function compress(img, quality, mime_type){
   var cvs = document.createElement('canvas');
   cvs.width = img.naturalWidth;
   cvs.height = img.naturalHeight;
   var ctx = cvs.getContext("2d").drawImage(img, 0, 0);
   var newImageData = cvs.toDataURL(mime_type, quality/100);
   return newImageData;
}

//ADD sendAsBinary compatibilty to older browsers
function dataURItoBlob(dataURI) {
    // Convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // Separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // Write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
}

function randomString(length) {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

export default Ember.Service.extend({
  upload(name, type, file) {

    var reader = new FileReader();
    var original = document.createElement('img');

    return new Promise(function(resolve, reject) {

      reader.onload = function (e) {
        original.setAttribute('src', e.target.result);

        var compressedImage = compress(original, 70, type);
        var md5name = md5(compressedImage);

        return $.ajax('/api/s3-token', {
          method: 'POST',
          data: { file: md5name, type: type }
        })
        .then( (resp) => {
          const xhr = new XMLHttpRequest();
          xhr.open("PUT", resp.signedRequest);
          xhr.setRequestHeader('x-amz-acl', 'public-read');
          xhr.setRequestHeader('Content-Type', type);
          xhr.onload = () => { resolve(resp.url) }
          xhr.onerror = (e) => { reject(e) }
          xhr.send(dataURItoBlob(compressedImage));
        });

      }

      reader.readAsDataURL(file);

    });

  }
})