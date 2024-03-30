const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema({
    context:{
        type:String,
        required:true,

    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    onmodel:{
        type:String,
        required:true,
        enum:['Likes', 'Comment', 'Video']
    },
    commentlikes:{
        type:mongoose.Schema.Types.ObjectId,
        refpath:'onmodel',
        required:true
    }
})
const Comment = mongoose.model('Comment',CommentSchema);
module.exports=Comment