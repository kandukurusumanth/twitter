const express = require('express');
const { likescontroller } = require('../../controller/index');
const router = express.Router();
router.post('/',likescontroller.createlikescontroller)
module.exports=router