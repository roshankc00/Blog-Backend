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
        type:String,
        default:"profile.webp"
    },
    role:{
        type:String, 
        default:"user",
    },
    isblocked:{
        type:Boolean,
        default:false
    },
},{timestamps:true})


const User=mongoose.model('user',userSchema)

module.exports=User
