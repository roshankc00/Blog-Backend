const express=require('express')
const { createComment,getAllComment,getaComment, updateComment, deleteComment } = require('../controlers/commentController')
const { checkAuth } = require('../middlewares/authMiddleWare')
const router=express.Router()

router.post('/createcomment',checkAuth,createComment)
router.get('/:id',checkAuth,getaComment)
router.get('/',checkAuth,getAllComment)
router.put('/:id',checkAuth,updateComment)
router.delete('/:id',checkAuth,deleteComment)


module.exports=router
