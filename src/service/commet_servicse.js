const { Tweet, Likes } = require("../models");
const {Likerepo} = require("../repo/index");
const Likesservice = new Likerepo();
async function updatecomment(data){
    try {
        
        const id1= data.tweet
        const commentedmember= data.user
        let commented = await Tweet.updateOne({_id:id1},{$push:{Comment:commentedmember}})
        return commented;
    } catch (error) {
        throw error
    }
}
module.exports={
    updatecomment
}