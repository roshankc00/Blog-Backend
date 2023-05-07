const Blog = require("../models/blogModel")

const createBlog=async(req,res)=>{
    const {title,description,tag}=req.body 
    try {
        if(title && description && tag){
            const blog=await Blog.create({
                title,
                description,
                tag
            })
            res.status(200).json({
                sucess:true,
                message:"Blog is added sucess fully",
                blog
            })
        }else{
            res.status(400).json({
                sucess:false,
                message:"all the fields are neccessary",
            })
        }
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"intenal server error"
        })
        
    }
}




module.exports={
    createBlog
}