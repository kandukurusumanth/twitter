const express = require('express');
const { tweetcontroller } = require('../../controller/index');
const router = express.Router();
router.post('/',  tweetcontroller.createatweetcontroller);
router.get('/:id',tweetcontroller.gettweetcontrollerbyid)
module.exports=router