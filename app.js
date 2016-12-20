"use strict";

const express	= require("express")
const bodyParser= require('body-parser')
const app 		= express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'));

// Create a root route  
app.get("/", (req, res, next) => {
	res.sendFile(__dirname + '/index.html')
})

app.post('/jobs', (req, res) => {
	console.log(req.body)
})

app.listen(3000, function(){
	console.log("The server is running. Catch it!");
});