var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2101',
    database: 'content'
});


// connection.connect()

module.exports = connection