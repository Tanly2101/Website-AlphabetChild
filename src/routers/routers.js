const homeRouter = require('./home')
const LogController = require('./Log')

function router(app) {
    app.use('/', homeRouter)
    app.use('/', LogController)
}

module.exports = router;