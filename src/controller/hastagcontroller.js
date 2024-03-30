const { hastagservice } = require("../service/index");

async function createhastagcontroller(req,res){
   
    try {
        
        
        const hastag = await hastagservice.createhastag({
            name:req.body.name

        })
        return res.json({
            data:hastag
        })
    } catch (error) {
        throw error
    }
}
module.exports={
    createhastagcontroller
}