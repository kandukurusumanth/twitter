const mongoose = require('mongoose');
const LikesSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
    

})
const Likes = mongoose.model('Likes', LikesSchema);
module.exports=Likes