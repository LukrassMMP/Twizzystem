const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

var port = process.env.PORT || 5000;
var numberOfUsers = 0;


app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

io.on('connection', (socket) => {
    numberOfUsers++;
    console.log("Angebeldete Nutzer: " + numberOfUsers);
    socket.on('redirect', (msg) => io.emit('redirect', msg));
});

io.on('connection', (socket) => {
    socket.on('start', (msg) => io.emit('start', msg));
});

io.on('connection', (socket) => {
    socket.on('answer', (msg) => io.emit('answer', msg));
});

io.on('connection', (socket) => {
    socket.on('newuser', (msg) => io.emit('newuser', msg));
});

io.on('connection', (socket) => {
    socket.on('vote', (msg) => io.emit('vote', msg));
});



// var server=app.listen(5000, function(){
//   console.log("app running on port 5000");
// });

http.listen(port, () => console.log('listening on Port: ' + port));
