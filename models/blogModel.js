const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
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
    },
    cover:{
        type:String
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }]
},{timestamps:true})

const Blog=mongoose.model('blog',blogSchema)
module.exports=Blog  
