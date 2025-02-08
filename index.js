const express = require("express");
const {Server} = require("socket.io");
const { createServer } = require("http");


const app = express();
const server = createServer(app);

app.use(express.static(__dirname + '/public'))

const io = new Server(server);
io.on('connection', (socket) => {
  socket.emit("welcome",{
    message:"welcome from server"
  });
  socket.on("message",(res)=>{
    io.emit("messageToClient",{message:res?.data})
  })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
