const Crudrepo = require("./crudrepo");
const {Comment} = require('../models/index')

class commentrepo extends Crudrepo{
    constructor(){
        super(Comment)

    }
}
module.exports=commentrepo
