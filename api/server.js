import express from 'express';
import { Server } from 'socket.io';
import {createServer} from 'http';

const app = express();
app.use(express.static("client"))
const expressServer = app.listen(8080,()=>{
    console.log(`running at : http://localhost:8080`)
});

const io = new Server(expressServer,{
      cors : {
        origin : ['http:localhost:8080','http://127.0.0.1:5500']
      }
})

io.on('connection',socket=>{
    console.log(socket.id);
    socket.on('msg',(data)=>{
      console.log(data);
    })
    socket.emit("message","hai")
})