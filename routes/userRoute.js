const express=require('express')
const { createUser,loginUser,blockUser, unblockUser } = require('../controlers/userContoller')
const upload = require('../middlewares/uploadImage')
const { checkAuth, isAdmin} = require('../middlewares/authMiddleWare')
const router=express.Router()


// authorized      


router.post('/register',upload.single('profile'),createUser)
router.post('/login',loginUser)
router.put('/block/:id',checkAuth,isAdmin,blockUser)
router.put('/unblock/:id',checkAuth,isAdmin,unblockUser)



// 

module.exports=router     

