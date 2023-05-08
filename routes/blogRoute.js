const express=require('express')
const { createBlog,deleteBlogs,getAllBlogs,getaBlog, updateBlog} = require('../controlers/blogController')
const { checkAuth} = require('../middlewares/authMiddleWare')
const upload = require('../middlewares/uploadImage')
const router=express.Router()


router.post('/createblog',checkAuth,upload.single('cover'),createBlog)
router.delete('/:id',checkAuth,deleteBlogs)
router.get('/',checkAuth,getAllBlogs)
router.get('/:id',checkAuth,getaBlog)
router.put('/:id',checkAuth,upload.single('cover'),updateBlog)

module.exports=router        