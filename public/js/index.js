var socket = io();

socket.on("join room 1", function(data){
  console.log("Joined Room 1")
});

socket.on("join room 2", function(data){
  console.log("Joined Room 2")
});

function joinRoom1() {
  socket.emit("join room 1");
};

function joinRoom2() {
  socket.emit("join room 2");
};
