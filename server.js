var express  = require('express');
var app      = express();
var morgan   = require('morgan');


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/node_modules'));                 // set the static files location /public/img will be /img for users


app.listen(8080)
