const { commentservice } = require("../service/index");

async function createcommentcontroller(req,res){
   
    try {
        
        
        const comment = await commentservice.updatecomment({
            
            tweet:req.query.tweet,
            user:req.query.user,


        })
        return res.json({
            data:comment
        })
    } catch (error) {
        throw error
    }
}
module.exports={
    createcommentcontroller
}