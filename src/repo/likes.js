const Crudrepo = require("./crudrepo");
const {Likes, Tweet} = require('../models/index')
const {User} = require('../models/index')
class likesrepo extends Crudrepo{
    constructor(){
        super(Likes)

    }
    async includxelikesintouser({tweet}){
        try {
            
            const tweetdetails = await Tweet.findById(tweet)
            
            return tweetdetails
            
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}
module.exports=likesrepo
