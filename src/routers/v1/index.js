const express = require('express');
const router = express.Router();
const info = require('./inforouter');
const  tweet  = require('./tweetrouter');
router.use('/info', info);
router.use('/tweet', tweet)
module.exports=router