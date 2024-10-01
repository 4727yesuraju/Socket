const socket = io('http://localhost:8080');


socket.on('connect',(responce)=>{
   // console.log(responce);
})

socket.on('message',(data)=>{
    console.log(data);
    socket.emit("msg",'hello')
})
