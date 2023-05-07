const express=require('express')
const { createUser,loginUser } = require('../controlers/userContoller')
const upload = require('../middlewares/uploadImage')
const router=express.Router()


router.post('/register',upload.single('profile'),createUser)
router.post('/login',loginUser)




module.exports=router     

