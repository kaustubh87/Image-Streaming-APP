'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var badges = require('./controllers/badges');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//save and send  - names of the middleware/controller

app.post('/', badges.save, badges.send, function(req,res){
    res.send('\ndone\n\n');
});

app.listen(8000, function(){
    console.log('App running at 8000');
});