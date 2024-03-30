const tweetrepo = require("../repo/tweet");
const tweetservice = new tweetrepo();
async function createatweet(data){
    try {
        const tweet = await tweetservice.create(data);
        return tweet;
    } catch (error) {
        throw error
    }
}
async function gettweetbyid(data){
    try {
        console.log(data);
        const tweet = await tweetservice.getbyid(data.id);
        return tweet;
    } catch (error) {
        throw error
    }
}
module.exports={
    createatweet,
    gettweetbyid
}