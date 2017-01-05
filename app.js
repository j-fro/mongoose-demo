var express = require('express');
var mongoose = require('mongoose');
var userRouter = require('./routers/userRouter');
var app = express();

mongoose.connect('mongodb://localhost:27017/tauUsersDatabase');

app.use('/user', userRouter);

app.listen('3000', function() {
    console.log('listening on 3000');
});
