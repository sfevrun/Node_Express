var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db'

});
module.exports = connection;