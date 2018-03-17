var express = require('express');
var router = express.Router();
var contact = require('../models/contact');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {

        contact.getContactById(req.params.id, function(err, rows) {

            if (err) {
                console.log('Error while .' + err);
                res.json(err);
            } else {
                console.log('success while performing Query1.' + JSON.stringify(rows));
                res.json(rows);
            }
        });
    } else {

        contact.getAllContacts(function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function(req, res, next) {

    contact.addContact(req.body, function(err, count) {
        if (err) {
            res.json(err);
            console.log('Error while performing Query1.' + err);
        } else {
            res.json(req.body); //or return count for 1 &amp;amp;amp; 0
            // console.log('Error while performing Query2.');
            // res.end('{ success = true, data = "Enregistrement effectué avec succès" }');
        }
    });
});
router.delete('/:id', function(req, res, next) {

    contact.deleteContact(req.params.id, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:id', function(req, res, next) {

    contact.updateContact(req.params.id, req.body, function(err, rows) {
        console.log('In function' + req.params.id);
        if (err) {
            console.log('Error while performing Query1.' + JSON.stringify(rows));
            res.json(err);
        } else {
            console.log('success while performing Query1.' + JSON.stringify(rows));
            res.json(rows);
        }
    });
});
module.exports = router;