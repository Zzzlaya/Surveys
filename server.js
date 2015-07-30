var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    routes = require('./routes'),
    swig = require('swig');

// Set swig as a templating engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/src/client/templates');
app.set('view cache', false);
// Set static path for Express
app.use('/static', express.static(__dirname + '/src/client'));
// Root route
app.get('/', routes.index);
// Starting server
server.listen('8080');
// Socket.io server side in action
io.on('connection', function(socket) {
    console.log('Client connected...');
    socket.on('join', function(data) {
        console.log(data);
    });
});
