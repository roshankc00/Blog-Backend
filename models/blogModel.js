const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    }
},{timestamps:true})

const Blog=mongoose.model('blog',blogSchema)
module.exports=Blog  
