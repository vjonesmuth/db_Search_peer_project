var express = require('express');
var router = express.Router();
var path = require('path');
var assignments = require('../models/assignment');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../views/create.html'));
});

/* POST home page. */
router.post('/', function(req, res, next) {
    assignments.create(req.body, function (err, assignment) {
        if (err) return next(err);
        res.redirect('/');
    })
});

console.log('create route loaded');

module.exports = router;
