const Crudrepo = require("./crudrepo");
const {Likes} = require('../models/index')

class likesrepo extends Crudrepo{
    constructor(){
        super(Likes)

    }
}
module.exports=likesrepo
