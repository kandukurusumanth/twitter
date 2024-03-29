const express = require('express');
const { infocontroller } = require('../../controller/index');
const router = express.Router();
router.get('/', infocontroller.check);
module.exports=router