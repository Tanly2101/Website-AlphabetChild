var express = require('express')
var routersData = express.Router()

const DataBase = require('../controller/DataBase');


routersData.post('/data', DataBase.submit)
routersData.get('/data', DataBase.databaseCon)



module.exports = routersData
