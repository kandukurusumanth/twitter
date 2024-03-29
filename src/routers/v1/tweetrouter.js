const express = require('express');
const { tweetcontroller } = require('../../controller/index');
const router = express.Router();
router.post('/',  tweetcontroller.createatweetcontroller);
router.get('/',tweetcontroller.getAlltweetcontroller)
module.exports=router