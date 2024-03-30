const { userservice } = require("../service");

async function createusercontroller(req,res){
    try {
        const user = await userservice.cresteuser({
            email:req.body.email,
            password:req.body.password,
            followers:req.body.followers,
            


        })
        return res.json({
            data:user
        })
    } catch (error) {
        console.log(error);
        return res.json({
            error:error
        })
        
    }
}
async function getusercontroller(req,res){
    try {
        const user = await userservice.checkuser({
            email:req.body.email,
            password:req.body.password
        })
        return res.json({
            data:user
        })
    } catch (error) {
        console.log(error);
        
        return res.json({
            error:error.message
        })
    }
}
module.exports={
    createusercontroller,
    getusercontroller
}