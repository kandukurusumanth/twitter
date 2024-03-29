const { tweetservice } = require("../service/index");



async function createatweetcontroller(req,res){
    try {
        const tweet = await tweetservice.createatweet({
            content:req.body.content,
            likes:req.body.likes,
            noofretweets:req.body.noofretweets,
            user:req.body.user
        })
        return res.json({
            data:tweet
        })
    } catch (error) {
        throw error
    }
}
async function getAlltweetcontroller(req,res){
    try {
        const tweet = await tweetservice.getAlltweet()
        return res.json({
            data:tweet
        })
    } catch (error) {
        throw error
    }
}
module.exports={
    createatweetcontroller,
    getAlltweetcontroller
}