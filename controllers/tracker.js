const express 	= require('express');
const trackerCtrl = express.Router();

const jobModel = require('../models/Job');
const bodyParser = require('body-parser');


trackerCtrl.get('/', function(req, res){
	res.render('angular')
});

// trackerCtrl.post('/', function(req, res){
// 	res.send('POST route on tracker.');
// });



// RESTful API

// //get all
// trackerCtrl.get('/', function(req, res, next) {
//   jobModel.find(function(error, jobs) {
//     if (error) return error;
//     res.json(jobs);
//   });
// });

// //get by id
// trackerCtrl.get('/:id', function(req, res, next) {
//   jobModel.findById(req.params.id, function(error, job) {
//     if (error) return error;
//     res.json(job);
//   });
// });

// //create
// trackerCtrl.post('/', function(req, res, next) {
//   jobModel.create(req.body, function(error, job) {
//     if (error) return error;
//     res.json(job);
//   });
// });

//update by id
trackerCtrl.put('/:id', function(req, res, next) {
  jobModel.findByIdAndUpdate(req.params.id, req.body, function(error, job) {
    if (error) return error;
    res.json(job);
  })
});
trackerCtrl.patch('/:id', function(req, res, next) {
  jobModel.findByIdAndUpdate(req.params.id, req.body, function(error, job) {
    if (error) return error;
    res.json(job);
  })
});

//delete by id
trackerCtrl.delete('/:id', function(req, res, next) {
  jobModel.findByIdAndRemove(req.params.id, req.body, function(error, job) {
    if (error) return error;
    res.json({
      "Message": "User with the id of " + job.id + " has been removed"
    });
  });
});


module.exports = trackerCtrl;