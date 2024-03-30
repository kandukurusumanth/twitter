const mongoose = require('mongoose');
const TweetSchema = mongoose.Schema({
    content:{
        type:String
    },
    Likes:[{
        type:mongoose.Schema.Types.ObjectId
    }],
    noofretweets:{
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    Comment:[{
        type:mongoose.Schema.Types.ObjectId
    }]

})
const Tweet = mongoose.model('tweets',TweetSchema);
module.exports= Tweet