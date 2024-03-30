const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema({
    context:{
        type:String,
        required:true,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
    
})
const Comment = mongoose.model('Comment',CommentSchema);
module.exports=Comment