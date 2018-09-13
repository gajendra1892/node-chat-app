const path =require('path');
const http=require('http');
const express =require('express');
const socketIO =require('socket.io');

const publicPath =path.join(__dirname ,'../public');


var app=express();
var server =http.createServer(app);
var io=socketIO(server);


app.use(express.static(publicPath)); //to make the middleware
const port =process.env.PORT || 3000;




io.on('connection',(socket)=>{

    console.log('New user connected');
   
   
    // socket.emit('newEmail',{
    //     from:'nike@example.com',
    //     text:'Hey.What is going on.',
    //     createdAt:123
    // });

    socket.emit('newMess',{

        from:'Gajendra',
        to:'Rahul',
        text:'Work properly'
    });

    // socket.on('createEmail',(newEmail)=>{
    // console.log('createEmail',newEmail);

    // });

    socket.on('createMessage',(msg)=>{
        console.log('server recive message',msg);
    
        });

    socket.on('disconnect',()=>{
        console.log(' User was disconnected');
    });
});





server.listen(port,()=>{
    console.log(`CHAT APP is started on ${port}`);
    });









// app.listen(port,()=>{
// console.log(`CHAT APP is started on ${port}`);
// });