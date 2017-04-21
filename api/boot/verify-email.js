var path = require("path");
var validator = require("email-validator");

module.exports = function(server) {

  server.post('/api/reverify', (req, res, next) => {
    var User = server.models.user;
    var email = req.body.email;

    if (!email || !validator.validate(email)) {
      return res.status(400).send({status: 'error', message: 'Invalid email'});
    }
    User.find({ where: { email: email } }, (err, users=[]) => {

      var user = users[0];
      console.log(user)
      if (err || !user) return res.send({status: 'error', message: 'Error finding user'});

      var options = {
        type: 'email',
        to: user.email,
        from: 'no-reply@marchforscience.com',
        subject: 'Email verification link',
        template: path.resolve(__dirname, '../../emails/verify.ejs'),
        redirect: '/verified',
        user: user
      };

      user.verify(options, function(err, response) {

        if (err){
          console.log('> verification email errored:', err);
          return res.status(500).send({
            status: "error",
            message: err.message
          });
        }

        console.log('> verification email sent:', response);

        res.send({
          status: "success",
          message: 'Signed up successfully. Please check your email and click on the verification link.'
        });
      });

    });

 });

};
