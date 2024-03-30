const { Tweet, Likes } = require("../models");
const {Likerepo} = require("../repo/index");
const Likesservice = new Likerepo();
async function createlikes(data){
    try {
        
        const id1= data.tweet
        const likedmember= data.user
        let updatedtweetlikes = await Tweet.updateOne({_id:id1},{$push:{Likes:likedmember}})
        return updatedtweetlikes;
    } catch (error) {
        throw error
    }
}
module.exports={
    createlikes
}