var express = require('express')
var router = express.Router()

const LogController = require('../controller/LogController');

router.get('/Login', LogController.showLog)
router.get('/Sign', LogController.showSign)

module.exports = router