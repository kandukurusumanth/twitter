const { likesservice } = require("../service/index");

async function createlikescontroller(req,res){
   
    try {
        
        
        const likes = await likesservice.createlikes({
            name:req.body.name

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