// modules
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');	
var fs = require('fs');

var config = {
	rootPath: __dirname,
	db: 'mongodb://admin:hh7357@ds051640.mongolab.com:51640/alt'
}

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/route')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

