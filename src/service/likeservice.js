const {Likerepo} = require("../repo/index");
const Likesservice = new Likerepo();
async function createlikes(data){
    try {
       
        let likes = await Likesservice.getAll(data);
        return likes;
    } catch (error) {
        throw error
    }
}
module.exports={
    createlikes
}