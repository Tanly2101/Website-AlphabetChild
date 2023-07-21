var express = require('express')
var router = express.Router()

const homeController = require('../controller/HomeController');


router.get('/', homeController.show)
router.get('/aboutA', homeController.showThongtin)
router.get('/aboutB', homeController.showThongtinB)
router.get('/aboutC', homeController.showThongtinC)
router.get('/aboutD', homeController.showThongtinD)
router.get('/aboutE', homeController.showThongtinE)
router.get('/aboutF', homeController.showThongtinF)
router.get('/aboutG', homeController.showThongtinG)
router.get('/aboutH', homeController.showThongtinH)
router.get('/aboutI', homeController.showThongtinI)
router.get('/aboutJ', homeController.showThongtinJ)
router.get('/aboutK', homeController.showThongtinK)
router.get('/aboutL', homeController.showThongtinL)
router.get('/aboutM', homeController.showThongtinM)
router.get('/kiemtra', homeController.showKiemtra)


module.exports = router
