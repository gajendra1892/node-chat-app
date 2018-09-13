

var socket = io();

socket.on('connect',function(){
    console.log('connected to server');

    // socket.emit('createEmail',{

    //     to:'jen@example.com',
    //     text:'Hey.This is Andrew.'
    // });

//     socket.emit('createMessage',{
//         to:'gajendra',
//         from:'rahul',
//         text:'ok'
//     })
 });

socket.on('disconnect',function(){
   console.log('disconnected from server');
});

// socket.on('newEmail',function(email){

//     console.log('New Email',email);
// });

socket.on('newMess',function(msg){

    console.log('Client recievemsg:',msg)
});