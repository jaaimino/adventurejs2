var fs = require('fs');
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 3000);

// configure express app
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('S3CRE7'));
app.use(session({ secret: 'S3CRE7-S3SSI0N', saveUninitialized: true, resave: true } ));
app.use(express.static(path.join(__dirname, 'public')));
//require('./config/passport')(app, passport);
app.use(passport.initialize());
app.use(passport.session());

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Connect to mongoose
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/test');

mongoose.connection.on('error', function (err) {
    console.error('MongoDB Connection Error. Please make sure MongoDB is running. -> ' + err);
});

function databaseStuff(){
	var Cat = mongoose.model('Cat', { name: String });

	var kitty = new Cat({ name: 'Zildjian' });
	kitty.save(function (err) {
	  if (err) // ...
	  console.log('meow');
	});
}

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

var nsp = io.of('/test');
nsp.on('connection', function(socket){
	socket.join("cool room");
  	socket.on('chat message', function(msg){
    nsp.to("cool room").emit('chat message', msg);
  });
});

http.listen(app.get('port'), function(){
  console.log('listening on *:'+app.get('port'));
});