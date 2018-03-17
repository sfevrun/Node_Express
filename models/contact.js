var db = require('../config/dbconnect'); //reference of dbconnection.js

var contact = {

    getAllContacts: function(callback) {
        return db.query("Select * from contact order by id desc", callback);
    },
    getContactById: function(id, callback) {

        return db.query("select * from contact where id=?", [id], callback);
    },
    addContact: function(contact, callback) {
        //new Date().toISOString().
        //   replace(/T/, ' ').      // replace T with a space
        //     replace(/\..+/, '')     // delete the dot and everything after
        //   > '2012-11-04 14:55:45'
        // console.log(contact.prenom + ' Voici la date ' + contact.date.replace(/T/, ' ').replace(/\..+/, ''));
        return db.query("Insert into contact values(?,?,?,?,?,?,?,?)", [contact.id, contact.nom, contact.prenom, contact.telephone, contact.email, contact.ville, contact.addresse, contact.date.replace(/T/, ' ').replace(/\..+/, '')], callback);
    },
    deleteContact: function(id, callback) {
        return db.query("delete from contact where id=?", [id], callback);
    },
    updateContact: function(id, contact, callback) {
        return db.query("update contact set nom=?,prenom=?, telephone=?, email=?, ville=?, addresse=?, date=? where id=?", [contact.nom, contact.prenom, contact.telephone, contact.email, contact.ville, contact.addresse, contact.date.replace(/T/, ' ').replace(/\..+/, ''), id], callback);
    }

};
module.exports = contact;