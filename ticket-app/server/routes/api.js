const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
var dbConn='mongodb://atsalmantahir:Vcodez100@ds141406.mlab.com:41406/ticket-app';
const connection = (closure) => {
    return MongoClient.connect(dbConn, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};




// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});



router.get('/productdetails', (req, res) => {
    connection((db) => {
        db.collection('product')
            .findOne({ _oid: "5a33b651734d1d2932384ef0"})
            .then((product) => {
                response.data = product;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});



router.get('/product', (req, res) => {
    connection((db) => {
        db.collection('product')
            .find()
            .toArray()
            .then((product) => {
                response.data = product;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});



module.exports = router;