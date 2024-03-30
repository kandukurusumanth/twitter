const bcrypt = require('bcrypt')
async function checkpassword(plainpassword,hashpassword){
    
    const checkpassword=await bcrypt.compareSync(plainpassword,hashpassword);
    console.log(checkpassword);
    if(checkpassword) return true;
    return false
}
module.exports=checkpassword