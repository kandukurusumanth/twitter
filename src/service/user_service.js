const { userrepo } = require("../repo/index");
const { checkpassword } = require("../utils/common/index");
const userservice = new userrepo();

async function cresteuser(data){
    try {
        const user = await userservice.create(data);
        return user
    } catch (error) {
        throw error
    }
}
async function checkuser(data){
    try {
        
        const user = await userservice.getone(data.email);
       
        if(!user) throw new Error('you need to do signup first becasue email doesnt exist')
        const check=await checkpassword(data.password,user.password)
        
        if(check) return user
        throw new Error('you have entered a wrong password')
        
    } catch (error) {
        throw error
    }
}
module.exports={
    cresteuser,
    checkuser
}