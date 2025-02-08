const express = require("express");
const {Server} = require("socket.io");
const { createServer } = require("http");
const namespaces = require("./data/namespaces");


const app = express();
const server = createServer(app);

app.use(express.static(__dirname + '/public'))

const io = new Server(server);
io.on('connection', (socket) => {
  socket.join("chat");
  io.of("/").to("chat").emit("welcomeToChatRoom",{})


  socket.emit("welcome",{message:"welcome from server"});
  socket.on("clientIsConnect",data=>{
    console.log(data);
  })

  
  socket.emit("nsList",namespaces)
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
