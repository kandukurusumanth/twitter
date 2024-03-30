const { likesservice } = require("../service/index");

async function createlikescontroller(req,res){
   
    try {
        
        
        const likes = await likesservice.createlikes({
            
            tweet:req.query.tweet,
            user:req.query.user,


        })
        return res.json({
            data:likes
        })
    } catch (error) {
        throw error
    }
}
module.exports={
    createlikescontroller
}