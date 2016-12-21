const express 	= require('express');
const controller = express.Router();

const jobModel = require('../models/Job');
const bodyParser = require('body-parser');


// RESTful API

//get all
controller.get('/', function(req, res, next) {
  jobModel.find(function(error, jobs) {
    if (error) return error;
    res.json(jobs);
  });
});

//get by id
controller.get('/:id', function(req, res, next) {
  jobModel.findById(req.params.id, function(error, job) {
    if (error) return error;
    res.json(job);
  });
});

//create
controller.post('/', function(req, res, next) {
  jobModel.create(req.body, function(error, job) {
    if (error) return error;
    res.json(job);
  });
});

//update by id
controller.put('/:id', function(req, res, next) {
  jobModel.findByIdAndUpdate(req.params.id, req.body, function(error, job) {
    if (error) return error;
    res.json(job);
  })
});
controller.patch('/:id', function(req, res, next) {
  jobModel.findByIdAndUpdate(req.params.id, req.body, function(error, job) {
    if (error) return error;
    res.json(job);
  })
});

//delete by id
controller.delete('/:id', function(req, res, next) {
  jobModel.findByIdAndRemove(req.params.id, req.body, function(error, job) {
    if (error) return error;
    res.json({
      "Message": "Job with the title of " + job.jobTitle + " has been removed"
    });
  });
});

module.exports = controller;