const Crudrepo = require("./crudrepo");
const {Tweet} = require('../models/index')

class tweetrepo extends Crudrepo{
    constructor(){
        super(Tweet)

    }
}
module.exports=tweetrepo
