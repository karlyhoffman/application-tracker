"use strict";

const express	= require("express");
const bodyParser= require('body-parser');
const path 		= require('path');
const app 		= express();

// require database
require('./models/db');

// controllers
const routes = require('./controllers/index');
const tracker = require('./controllers/tracker.js'); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//     res.render('angular');  
// });

// controllers
app.use('/', routes);
app.use('/jobs', tracker); 

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });


app.listen(3000, function(){
	console.log("The server is running. Catch it!");
});

module.exports = app;