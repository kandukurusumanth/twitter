const express = require('express');
const { usercontroller } = require('../../controller');
const router =express.Router();
router.post('/signup', usercontroller.createusercontroller);
router.post('/signin',usercontroller.getusercontroller)
module.exports=router