var express = require('express');
var logger = require('./logger.js');
var conf = require('./config.json');

var app = express();
var server = require('http').createServer(app);
var io = require("socket.io").listen(server);
server.listen(conf.port);
console.log("[i] expresschat is now listening on http://localhost:"+conf.port.toString());

app.set('view engine', 'jade');

app.use(logger);
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(request, response){
    response.render('index');
});

io.sockets.on('connection', function(socket) {
    socket.emit('chat', {
        "name": "Server",
        "message": "Hello Websocket world!"
    });
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });
});
