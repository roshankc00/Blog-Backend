const express=require('express')
const { createBlog } = require('../controlers/blogController')
const { checkAuth, isAdmin} = require('../middlewares/authMiddleWare')
const router=express.Router()


router.post('/createblog',checkAuth,isAdmin,createBlog)

module.exports=router