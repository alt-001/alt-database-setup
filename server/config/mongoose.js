var mongoose = require('mongoose'),
    userModel = require('../models/user');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('alt db opened');
  });

  userModel.createDefaultUsers();
};