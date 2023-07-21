class LogController {
    //[get] /Login
    showLog(req, res) {
        res.render('Code/Login', { layout: false })
    }
    showSign(req, res) {
        res.render('Code/Sign', { layout: false })
    }
}
module.exports = new LogController()