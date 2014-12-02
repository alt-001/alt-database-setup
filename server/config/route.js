var auth = require('./auth'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  encrypt = require('../utilities/encryption');

module.exports = function(app) {
	app.get('/api/users', function(req, res) {
    User.find({}).exec(function(err, collection) {
      res.send(collection);
    })
  });

  app.post('/api/users', function(req, res, next) {
    var userData = req.body;
    userData.username = userData.username.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);
    User.create(userData, function(err, user) {
      if(err) {
        if(err.toString().indexOf('E11000') > -1) {
          err = new Error('Duplicate Username');
        }
        res.status(400);
        return res.send({reason:err.toString()});
      }
      req.logIn(user, function(err) {
        if(err) {return next(err);}
        res.send(user);
      })
    })
  });

  app.put('/api/users', function(req, res) {
    var userUpdates = req.body;

    if(req.user._id != userUpdates._id) {
      res.status(403);
      return res.end();
    }

    req.user.bycolor = userUpdates.bycolor;

    req.user.save(function(err) {
      if(err) { res.status(400); return res.send({reason:err.toString()});}
      res.send(req.user);
    });
  });

	app.get('/pages/*', function(req, res){
		res.render('pages/' + req.params);
	});

	app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

	app.get('*', function(req, res){
	  res.render('layout.jade');
	});

}