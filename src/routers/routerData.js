const DataBase = require('./Data')
function routerD(app) {
    app.use('/', DataBase)
}

module.exports = routerD;