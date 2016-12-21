"use strict";

const express	= require("express");
const bodyParser= require('body-parser');
const path 		= require('path');
const app 		= express();

// require database
require('./models/db');

// controllers
const tracker = require('./controllers/tracker.js'); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('angular');  
});

// controllers
app.use('/jobs', tracker); 

app.listen(3000, function(){
	console.log("The server is running. Catch it!");
});

module.exports = app;