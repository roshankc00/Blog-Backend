const Blog = require("../models/blogModel");
const Comment = require("../models/commentModel")

const createComment=async(req,res)=>{
    const {comment,id}=req.body
    try {
        const commentposted=await Comment.create({
            comment,
            user:req.user.id
        })
        res.status(200).json({
            sucess:true,
            message:"comment added to the database",
            commentposted
        })
        const post=await Blog.findByIdAndUpdate(id,{
            $push:{comments:commentposted.id}
        })

    } catch (error) {
        res.status(500).json({
            error
        })
        
    }
}


const getAllComment=async(req,res)=>{
    try {
        const allComments=await Comment.find({})
        res.status(200).json({
            sucess:true,
            allComments
        })
        
    } catch (error) {
        res.status(500).json({
            error
        })
        
    }
}





const getaComment=async(req,res)=>{
    const id=req.params.id
    try {
        const comment=await Comment.findById(id)
        res.status(200).json({
            sucess:true,
            comment
        })
        
    } catch (error) {
        res.status(500).json({
            error
        })
        
    }
}

const updateComment=async(req,res)=>{
    const id=req.params.id
    const {comment}=req.body
    try {
        const updatedComment=await Comment.findByIdAndUpdate(id,{comment},{new:true})
        res.status(200).json({
            sucess:true,
            message:"comment updated",
            updatedComment
        })
        
    } catch (error) {
        res.status(500).json({
            error
        })
        
    }

}


const deleteComment=async(req,res)=>{
    const {id}=req.body

    try {
        const post=await Blog.findById(id)
        const deleteone=await Blog.findByIdAndUpdate(id,{
            $pull:{comments:req.params.id}
        },{new:true})
        const deletedComment=await Comment.findByIdAndDelete(req.params.id)
        
        res.status(200).json({
            message:true,
            message:"deleted Sucessfully",
            deletedComment,

        })
        
    } catch (error) {
        res.status(500).json({
            error
        })
        
    }

}


module.exports={
    createComment,
    getAllComment,
    getaComment,
    updateComment,
    deleteComment
}