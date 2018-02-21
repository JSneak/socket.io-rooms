const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {

  socket.on("join room 1", function(data) {
    socket.join("room 1");
    io.to('room 1').emit('join room 1');
  });

  socket.on("join room 2", function(data) {
    socket.join("room 2");
    io.to('room 2').emit('join room 2');
  });

});




http.listen(port, () => console.log('listening on port ' + port));
