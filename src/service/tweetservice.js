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
async function getAlltweet(){
    try {
        const tweet = await tweetservice.getAll();
        return tweet;
    } catch (error) {
        throw error
    }
}
module.exports={
    createatweet,
    getAlltweet
}