var express = require('express');
var router = express.Router();
var path = require('path');
//var express   =    require("express");
var mysql = require('mysql');
var app = express();
//var comments = require('../models/comments');
/*var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db',
    debug: false
});

function handle_database(req, res) {
    pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        console.log('connected as id ' + connection.threadId);
        connection.query("select * from user", function(err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            }
        });
        connection.on('error', function(err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
}*/
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});
/*router.get('/data', function(req, res) {
    handle_database(req, res);
});
*/
//router.get('/comments', comments.getAll); //route add customer, get n post
module.exports = router;