const mongoose = require('mongoose');
const TweetSchema = mongoose.Schema({
    content:{
        type:String
    },
    likes:{
        type:Number
    },
    noofretweets:{
        type:Number
    },
    user:{
        type:String
    }

})
const Tweet = mongoose.model('tweets',TweetSchema);
module.exports= Tweet