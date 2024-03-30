const mongoose = require('mongoose');
const LikesSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    
    onmodel:{
        type:String,
        required:true,
        enum:['Likes', 'Comment', 'Video']
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        refpath:'onmodel',
        required:true
    }

})
const Likes = mongoose.model('Likes', LikesSchema);
module.exports=Likes