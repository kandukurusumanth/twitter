const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const server = require('../config/server');

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String

    },
    follwers:{
        type:Number
    },
    tweets:[{
        type:mongoose.Schema.Types.ObjectId
    }]


})
UserSchema.pre('save', function (next){
    
   
    const hash = bcrypt.hashSync(this.password, +server.SALT_ROUND);
    this.password=hash
    
    next();
})
const User = mongoose.model('User', UserSchema);
module.exports=User