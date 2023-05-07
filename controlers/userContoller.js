const User = require("../models/userModel")

const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    const {filename}=req.file
    try {
        if(name && email && filename && password){
            console.log("roshan karki 1 ");
            const user=await User.create({
                name,
                email,
                password,
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


module.exports={
    createUser
}





