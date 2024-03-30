const express = require('express')
const { commentcontrolller } = require('../../controller/index')
const router = express.Router()
router.post('/' , commentcontrolller.createcommentcontroller)
module.exports=router