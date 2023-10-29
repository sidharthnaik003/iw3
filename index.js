// const express = require('express')
// var http = require('http')
// const app = express()

// http.createServer(function(req, res){
//     res.end("Hello world!")
// }).listen(3000)

// console.log("Server is running")




const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./src/routes/routes')
app.use(express.json());
const PORT = 8080
mongoose.connect('mongodb+srv://sid003:sid%40003@cluster0.llbvfez.mongodb.net/mydb')
.then(()=>{ console.log("Database connected")})
.catch((error)=>{ console.log(error)})
app.use('/',route);
app.listen( PORT ,()=>{
    console.log(`Server is running ${PORT}`);
})