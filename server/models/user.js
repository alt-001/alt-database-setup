var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type:String, required:'{PATH} is required!'},
  lastName: {type:String, required:'{PATH} is required!'},
  username: {
    type: String,
    required: '{PATH} is required!',
    unique:true
  },
  salt: {type:String, required:'{PATH} is required!'},
  hashed_pwd: {type:String, required:'{PATH} is required!'},
  roles: [String],
  gender: String,
  bycolor: [],
});
userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
  }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, '123');
      User.create({firstName:'X',lastName:'Tao',username:'admin@alt-001.com', salt: salt, hashed_pwd: hash, roles: ['admin'], gender: 'x'});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, '123');
      User.create({firstName:'Micky',lastName:'Wang',username:'pro@alt-001.com', salt: salt, hashed_pwd: hash, roles: ['pro'], bycolor: [], gender: 'x'});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, '123');
      User.create({firstName:'Su',lastName:'Liang',username:'user@alt-001.com', salt: salt, hashed_pwd: hash, bycolor: [], gender: 'y'});
    }
  })
};

exports.createDefaultUsers = createDefaultUsers;