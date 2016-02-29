var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 3000);

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

app.use(express.static(path.join(__dirname, 'public')));

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