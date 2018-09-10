const path =require('path');
const express =require('express');

const publicPath =path.join(__dirname ,'../public');




// console.log(__dirname + '/../public');
// console.log(publicPath);

var app=express();
app.use(express.static(publicPath)); //to make the middleware
const port =process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`CHAT APP is started on ${port}`);
});