
const { User } = require("../models/index");
const Crudrepo = require("../repo/crudrepo");
const { userservice } = require("../service");

class userrepo extends Crudrepo{
    constructor(){
        super(User)
    }
    async getone(data){
        const user = await User.findOne({email:data});

        return user
    }

}
module.exports=userrepo