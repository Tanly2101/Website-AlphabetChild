const con = require('../configs/db')
const trane = require('../service/Trane')
class databaseCha {

    databaseCon(req, res) {
        let data = []
        let questions
        con.query('SELECT * from cauhoi', function (error, results, fields) {
            // console.log(results)
            questions = results
            for (let i = 0; i < questions.length; i++) {
                let answers = []
                con.query(`SELECT * from traloi where idCauHoi = ${questions[i].id} `, function (error, results, fields) {
                    for (let i = 0; i < results.length; i++) {
                        // console.log(results[i].Traloi)
                        answers.push(results[i].Traloi)
                    }
                    let questionObj = new Object({
                        Id: questions[i].id,
                        question: questions[i].CauHoicol,
                        img: questions[i].img,
                        audio: questions[i].audio,
                        answer: results
                    })
                    data.push(questionObj)
                    // console.log(questionObj)
                });

            }
            res.render('Code/Test', { layout: false, data })
        });

    }

    async submit(req, res) {

        let Objreturn = req.body
        let sum = 0
        for (const key in Objreturn) {
            // console.log(Objreturn[key])
            let ket1 = await trane.checkAnswer(Objreturn[key])
            // console.log(ket1[0].KetQua)
            if (ket1[0].KetQua === 1) {
                sum += 1
            }
        }
        con.query(`INSERT INTO ketqua(diem) VALUES (${sum}) `, function (error, results, fields) {

            res.render('Code/Ketqua', { layout: false, sum })

        })

        ///



    }
}
module.exports = new databaseCha();

