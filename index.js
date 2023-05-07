const express=require('express')
const connectDb = require('./config/connectDb')
const dotenv=require('dotenv').config()
const userRoute=require('./routes/userRoute')

// rest variables 
const app=express()
const PORT=process.env.PORT


// connecting to the database 
connectDb()


// middlewares
app.use(express.json())
app.use(express.static('public/upload'))


// routes
app.use('/api/v1',userRoute)  



// listening to the port 
app.listen(PORT,()=>{
    console.log(`running at the portNo ${PORT}`);
})


