var request = require('request');

module.exports = function(server) {
  server.get('/api/blog', (req, res) => {
    var url = req.query.url;
    if (!url) return res.status(500).send({
      status: 'error',
      message: 'No url found!'
    });
    request(url, function (error, response, body) {
      if (error) return res.status(500).send({
        status: 'error',
        message: "OH GOD – CAN'T RESOLVE URL!"
      });

      if (!error && response.statusCode == 200) {
        res.send(body) // Print the google web page.
      }
    });
 });

};
