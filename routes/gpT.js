const express = require('express')
const router = express.Router()

const Service = require('../services/Services')

router.get('/', Service.checkSrv)
router.get('/checkDB', Service.checkDB)

router.post('/addFile', Service.addFile)
router.post('/chat',Service.chat)


module.exports = router