const mongoose = require('mongoose');
const HastagSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ]
})
const Hastag = mongoose.model('hastag', HastagSchema)
module.exports=Hastag