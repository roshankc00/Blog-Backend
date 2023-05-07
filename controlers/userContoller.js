const User = require("../models/userModel")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    const {filename}=req.file
    try {
        if(name && email && filename && password){
            const secpass=await bcrypt.hash(password,10)
            const user=await User.create({
                name,
                email,
                password:secpass,
                profile:filename
            })
           return  res.status(200).json({
                sucess:true,
                message:"sucessfully added to the database",
                user
            })

        }else{
            console.log("roshan karki 3 ");
          return   res.status(400).json({
                sucess:false,
                message:"all the fields are required"
            })
        }
        
    } catch (error) {
       return  res.status(500).json({
            sucess:false,
            message:"internal server error"
        })
        
    }
}








// login the user 

const loginUser=async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password);
    try {
        if(email && password){
            const user=await User.findOne({email})
            console.log(user);
            if(!user){
               return  res.status(400).json({
                    sucess:false,
                    message:"unable to login the user"
                })
            }
            const compare=await bcrypt.compare(password,user.password)
            const obj={
                id:user.id
            }
            if(compare){
                const token=jwt.sign(obj,process.env.SECRET)
                return res.json({token})
            }
        }else{
           return  res.status(400).json({
                sucess:false,
                message:"unable to login the user"
            })
        }
        
    } catch (error) {
       return  res.status(500).json({
            sucess:true,
            message:"internal server errror"
        })
    }

}
















module.exports={
    createUser,
    loginUser
}





