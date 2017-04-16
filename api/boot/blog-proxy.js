var request = require('request');

module.exports = function(server) {
  server.get('/api/blog', (req, res) => {
    var url = req.query.url;
    if (!url) return res.status(500).send({
      status: 'error',
      message: 'No url found!'
    });
    request(url, function (error, response, body) {
      if (error || response.statusCode != 200) return res.status(500).send({
        status: 'error',
        message: "OH GOD – CAN'T RESOLVE URL!"
      });
      res.send(body);
    });
 });
};
