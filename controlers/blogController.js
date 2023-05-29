const Blog = require("../models/blogModel");






// creating the blogs 
const createBlog=async(req,res)=>{
    const {title,description,tag}=req.body 
        const {filename}=req.file
    
    try {
        if(title && description && tag){
            const blog=await Blog.create({
                title,
                description,
                tag,
                cover:filename,
                user:req.user.id
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
            message:"intenal server error",
            error
        })
        
    }
}





// deleting the blogs 
const deleteBlogs=async(req,res)=>{
    const id=req.params.id
    try {
        const blog=await Blog.findById(id)
        if(req.user.id!==blog.user.toString()){
            return res.status(400).json({
                sucess:false,
                message:"user who has created can only update this"
            })

        }
        if(req.user.id!==id){
            return res.status(400).json({
                sucess:false,
                message:"user who has created can only update this"
            })

        }
        if(!blog){
            return res.status(400).json({
                sucess:false,
                message:"blog with this id doesnt exist",
            })
        }else{
            const deletedblog=await Blog.findByIdAndDelete(id)
            return res.status(200).json({
                sucess:true,
                message:"deleted sucessfully",
                deletedblog
                
            })
        }
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"unable to delete the blog",
            error
        })
        
    }

}




// getall the blogs 
const getAllBlogs=async(req,res)=>{
    try {
        const blogs=await Blog.find({}).populate('comments').populate('user')
        return res.status(200).json({
            sucess:true,
            message:"blog has been added sucessfully",
            blogs
        })
        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"unable to delete the blog",
            error
        })
        
    }
}



// get a single blog 
const getaBlog=async(req,res)=>{
    const id=req.params.id
    try {
        const blog=await Blog.findById(id).populate('comments').populate('user')
        if(!blog){
            return res.status(400).json({
                sucess:false,
                message:"no blog with id exists"
            })
        }else{
            return res.status(200).json({
                sucess:true,
                blog
            })
        }

        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"unable to delete the user",
            error
        })
        
    }
}



// update the blog 
const updateBlog=async(req,res)=>{
    const id=req.params.id
    const {title,description,tag}=req.body
    const {filename}=req.file
    try {
        
        const blog=await Blog.findById(id)
      
        if(req.user.id!==blog.user.toString()){
            return res.status(400).json({
                sucess:false,
                message:"user who has created can only update this"
            })

        }
        if(!blog){
            return res.status(400).json({
                sucess:false,
                message:"blog with this "
            })
        }else{
     const updatedone= await Blog.findByIdAndUpdate(id,{
                title,
                description,
                tag,
                cover:filename

            },{new:true})
            res.status(200).json({
                sucess:true,
                message:"blog has been updated sucessfully",
                updatedone

            })
        }
         

        
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:"unable to update the user",
            error
        })
        
    }
}


module.exports={
    createBlog,
    deleteBlogs,
    getAllBlogs,
    getaBlog,
    updateBlog
}