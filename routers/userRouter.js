var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('../models/user');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', function(req, res) {
    console.log('in user route', req.body);
    var newUser = new User({
        name: req.body.firstName,
        username: req.body.userName,
        admin: req.body.admin
    });
    console.log(newUser);
    newUser.save(function(err) {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/', function(req, res) {
    User.find({}, function(err, userResults) {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(userResults);
        }
    });
});

module.exports = router;
