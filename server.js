var express= require('express')
var app = express()
var socket=require('socket.io')

app.use(express.static('public'))



port = process.env.PORT || 3000
var server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
var io = socket(server)

io.on('connection',(socket)=>{
    console.log('Connection is Made')  //each socket has unique id
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
        
   
        
        
    })
})

