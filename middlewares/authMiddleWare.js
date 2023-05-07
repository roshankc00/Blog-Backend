const jwt=require('jsonwebtoken')
const User = require('../models/userModel')

const checkAuth=(req,res,next)=>{
    const token=req.header('auth-token')
    try {
    if(!token){
        return res.status(401).json({ 
            message:"invalid auth credentials"
        })
    }
    const user=jwt.verify(token,process.env.SECRET)
    req.user=user
   next()

} catch (error) {
    return res.status(500).json({
        sucess:false,
        message:"internal server Error"
    })
        
}

}



// checking weather the user is admin or not 
const isAdmin=async(req,res,next)=>{
    const id=req.user.id
   const user= await User.findById(id)
   console.log(typeof(user.role));
   if(user.role!=="admin"){
    return res.status(400).json({
        sucess:false,
        message:"you are not admin"
    })
   }
    next()

}



module.exports={
    checkAuth,
    isAdmin
}



