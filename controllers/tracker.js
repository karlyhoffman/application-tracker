const express 	= require('express');
const controller = express.Router();

const jobModel = require('../models/Job');
const bodyParser = require('body-parser');


// RESTful API

//get all
controller.get('/', (req, res, next)=> {
  jobModel.find((error, jobs)=> {
    if (error) return error;
    res.json(jobs);
  });
});

//get by id
controller.get('/:id', (req, res, next)=> {
  jobModel.findById(req.params.id, (error, job)=> {
    if (error) return error;
    res.json(job);
  });
});

//create
controller.post('/', (req, res, next)=> {
  jobModel.create(req.body, (error, job)=> {
    if (error) return error;
    res.json(job);
  });
});

// update by id
controller.put('/:id', (req, res, next)=> {
  jobModel.findByIdAndUpdate(req.params.id, req.body, (error, job)=> {
    job.submitDate = req.body.submitDate;
    job.jobTitle = req.body.jobTitle;
    job.company = req.body.company;
    job.jobDescLink = req.body.jobDescLink;
    job.interviewerNameAndTitle = req.body.interviewerNameAndTitle;
    job.interviewerContact = req.body.interviewerContact;
    job.interviewerNotes = req.body.interviewerNotes;
    job.followUpEmail = req.body.followUpEmail;
    if (error) return error;
    res.json(job);
  })
});
controller.patch('/:id', (req, res, next)=> {
  jobModel.findByIdAndUpdate(req.params.id, req.body, (error, job)=> {
    job.submitDate = req.body.submitDate;
    job.jobTitle = req.body.jobTitle;
    job.company = req.body.company;
    job.jobDescLink = req.body.jobDescLink;
    job.interviewerNameAndTitle = req.body.interviewerNameAndTitle;
    job.interviewerContact = req.body.interviewerContact;
    job.interviewerNotes = req.body.interviewerNotes;
    job.followUpEmail = req.body.followUpEmail;
    if (error) return error;
    res.json(job);
  })
});

//delete by id
controller.delete('/:id', (req, res, next)=> {
  jobModel.findByIdAndRemove(req.params.id, req.body, (error, job)=> {
    if (error) return error;
    res.json({
      "message": "Job with the title of " + job.jobTitle + " has been removed"
    });
  });
});

module.exports = controller;