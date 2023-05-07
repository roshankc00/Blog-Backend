const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String
    },
    role:{
        type:String,
        default:"user",

    }
},{timestamps:true})


const User=mongoose.model('user',userSchema)

module.exports=User
