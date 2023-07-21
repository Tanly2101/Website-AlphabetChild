const con = require('../configs/db')
class Trane {
    checkAnswer(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT  KetQua from traloi where id = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }
}
module.exports = new Trane();