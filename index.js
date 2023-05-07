const express=require('express')
const connectDb = require('./config/connectDb')
const dotenv=require('dotenv').config()

// all the routes import
const userRoute=require('./routes/userRoute')
const blogRoute=require('./routes/blogRoute')

// rest variables 
const app=express()
const PORT=process.env.PORT


// connecting to the database 
connectDb()


// middlewares
app.use(express.json())
app.use(express.static('public/upload'))


// routes
app.use('/api/v1/user',userRoute)  
app.use('/api/v1/blog',blogRoute)  



// listening to the port 
app.listen(PORT,()=>{
    console.log(`running at the portNo ${PORT}`);
})


