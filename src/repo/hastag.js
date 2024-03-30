const Crudrepo = require("./crudrepo");
const {Hastag} = require('../models/index')
const {Tweet} = require('../models/index')
console.log(Hastag, 'from the hastagpage ');
class hastagrepo extends Crudrepo{
    constructor(){
        super(Hastag)
    }
    async getallhastag(data){
        try {
           
            const regex = new RegExp(data.name,'i')
            const tweet = await Tweet.find({content:regex}).sort({likes:-1})
            // console.log(tweet);
            
            return tweet
        } catch (error) {
            throw error
            
        }
    }
}
module.exports=hastagrepo