const express = require('express');
const router = express.Router();
const info = require('./inforouter');
const  tweet  = require('./tweetrouter');
const hastag = require('./hastagrouter')
const likes = require('./likesrouter')
const user = require('./userrouter')
const comment = require('./commentrouter')
router.use('/info', info)
router.use('/tweet', tweet)
router.use('/hastag',hastag)
router.use('/likes',likes)
router.use('/user',user)
router.use('/comment', comment)
module.exports=router