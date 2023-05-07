const express=require('express')
const { createUser } = require('../controlers/userContoller')
const upload = require('../middlewares/uploadImage')
const router=express.Router()


router.post('/',upload.single('profile'),createUser)


module.exports=router     

