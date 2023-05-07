const checkAuth=(req,res,next)=>{
    const token=res.header('auth-token')
    if(!token){
        res.status(401).json({
            message:"invalid auth credentials"
        })
    }
}