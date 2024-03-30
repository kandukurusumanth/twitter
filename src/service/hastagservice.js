const {hastagrepo} = require("../repo/index");
const hastagservice = new hastagrepo();
async function createhastag(data){
    try {
       
        let hastag = await hastagservice.getallhastag(data);
       
        hastag = hastag.map((obj,ind)=>{
            return obj._id
        })
        data.tweets=hastag
        const hastagcreate = await hastagservice.create(data)
        
        return hastagcreate;
    } catch (error) {
        throw error
    }
}
module.exports={
    createhastag
}