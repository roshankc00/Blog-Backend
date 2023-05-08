const mongoose=require('mongoose')
const commentSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    comment:{
        type:String,
        required:true
    }
},{timestamps:true})


const Comment=mongoose.model('comment',commentSchema)


module.exports=Comment

// commnted post chaiyo kun ma hanya ho 