const express = require('express');
const { hastagcontroller } = require('../../controller/index');
const router = express.Router();

router.post('/', hastagcontroller.createhastagcontroller)
module.exports=router
