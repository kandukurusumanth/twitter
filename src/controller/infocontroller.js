

function check(req,res){
    
    return res.json({
        sucess:true,
        message:'api is live',
        data:{},
        error:{}
    })
    
}
module.exports={
    check
}