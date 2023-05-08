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
    try {
        if(email && password){
            const user=await User.findOne({email})
            if(!user){
                return  res.status(400).json({
                    sucess:false,
                    message:"unable to login the user"
                })
            }
            const compare=await bcrypt.compare(password,user.password)
            if(!compare){
                return  res.status(400).json({
                    sucess:false,
                    message:"unable to login the user"
                })

            }
            const obj={
                id:user.id
            }
            console.log(compare);
            if(compare){
                console.log(email,password);
                const token=jwt.sign(obj,process.env.SECRET)
                console.log("nepal");
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


// block the user 
const blockUser=async(req,res)=>{
    const id=req.params.id
    try {
        const user=await User.findById(id)
        if(!user){
            return res.status(400).json({
                sucess:false,
                message:"no such user exists",
                
            })
        }


        const blockuser=await User.findByIdAndUpdate(id,{
            isblocked:true
        },{new:true})
        res.status(200).json({
            sucess:true,
            message:"the user has been blocked sucessfully",
            blockuser
        })
        
    } catch (error) {
        return  res.status(500).json({
             sucess:true,
             message:"internal server errror"
         })
     }
}





// unblock the user 
const unblockUser=async(req,res)=>{
    const id=req.params.id
    try {
        const user=await User.findById(id)
        if(!user){
            return res.status(400).json({
                sucess:false,
                message:"no such user exists",
                
            })
        }


        const blockuser=await User.findByIdAndUpdate(id,{
            isblocked:false
        },{new:true})
        res.status(200).json({
            sucess:true,
            message:"the user has been unblocked sucessfully",
            blockuser
        })
        
    } catch (error) {
        return  res.status(500).json({
             sucess:true,
             message:"internal server errror"
         })
     }
}







module.exports={
    createUser,
    loginUser,
    blockUser,
    unblockUser
}





