const Crudrepo = require("./crudrepo");
const {Tweet} = require('../models/index')
console.log(Tweet);
class tweetrepo extends Crudrepo{
    constructor(){
        super(Tweet)

    }
}
module.exports=tweetrepo
