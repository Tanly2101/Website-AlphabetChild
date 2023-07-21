// const con = require('../configs/db')
class HomeController {
    show(req, res) {
        res.render('Code/home')
    }
    showThongtin(req, res) {
        res.render('Code/thongtin')
    }
    showKiemtra(req, res) {
        res.render('Code/Kiemtra')
    }
    showThongtinB(req, res) {
        res.render('Code/ThongtinB')
    }
    showThongtinC(req, res) {
        res.render('Code/ThongtinC')
    }
    showThongtinD(req, res) {
        res.render('Code/ThongtinD')
    }
    showThongtinE(req, res) {
        res.render('Code/ThongtinE')
    }
    showThongtinF(req, res) {
        res.render('Code/ThongtinF')
    }
    showThongtinG(req, res) {
        res.render('Code/ThongtinG')
    }
    showThongtinH(req, res) {
        res.render('Code/ThongtinH')
    }
    showThongtinI(req, res) {
        res.render('Code/ThongtinI')
    }
    showThongtinJ(req, res) {
        res.render('Code/ThongtinJ')
    }
    showThongtinK(req, res) {
        res.render('Code/ThongtinK')
    }
    showThongtinL(req, res) {
        res.render('Code/ThongtinL')
    }
    showThongtinM(req, res) {
        res.render('Code/ThongtinM')
    }
}

module.exports = new HomeController()
// { results }
     // con.query('SELECT * from kiemtra', function (error, results, fields) {
        //     if (error) throw error;
        //     console.log(results);

        // });