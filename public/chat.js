
//front end - grabbing message from the dom and sending to the server


var socket = io.connect('http://127.0.0.1:3000/')

var handle = document.querySelector('#handle')
var message = document.querySelector('#message')
var btn = document.querySelector('#send')
var output = document.querySelector('.output')



btn.addEventListener('click',()=>{
    console.log("The handle is "+handle.value)
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
       
        
    })
    message.value=""
})


socket.on('chat',(data)=>{

    if(data.handle==handle.value){
        output.innerHTML +='<div class="badge badge-primary badge-primary" id="user"><p><strong>' + data.handle + ' </strong>'+data.message + '</p></div>'

    }
    else{
        output.innerHTML +='<div class="badge badge-success badge-secondary" id="otherUser"><p><strong>' + data.handle + ' </strong>'+data.message + '</p></div>'


    }
   
})