const express=require('express')
const connectDb = require('./config/connectDb')
const dotenv=require('dotenv').config()

// rest variables 
const app=express()
const PORT=process.env.PORT


// connecting to the database 
connectDb()


// middlewares


// routes



// listening to the port 
app.listen(PORT,()=>{
    console.log(`running at the portNo ${PORT}`);
})


