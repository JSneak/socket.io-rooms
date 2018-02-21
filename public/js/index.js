var socket = io();

socket.on("join room 1", function(data){
  transition(true);
  console.log("Joined Room 1")
});

socket.on("join room 2", function(data){
  transition(true);
  console.log("Joined Room 2")
});

socket.on("leave room 1", function(data) {
  transition(false);
});

socket.on("leave room 2", function(data) {
  transition(false);
});

function joinRoom1() {
  socket.emit("join room 1");
};

function joinRoom2() {
  socket.emit("join room 2");
};

function leaveRoom1() {
  socket.emit("leave room 1");
};

function leaveRoom2() {
  socket.emit("leave room 2");
};

function transition(state) {
  if(state == true) {
    document.getElementById("join").className = "hidden";
    document.getElementById("leave").className = "visible";
  }else{
    document.getElementById("join").className = "visible";
    document.getElementById("leave").className = "hidden";
  }
}
