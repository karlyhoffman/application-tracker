"use strict";

var express = require("express");
var app 	= express();

// Create a root route  
app.get("/", function(req, res, next){
		res.send("<h1>Hi</h1>");
})

app.listen(3000, function(){
	console.log("The server is running. Catch it!");
});