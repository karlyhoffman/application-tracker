const mongoose 	= require('mongoose');

let JobSchema = new mongoose.Schema({
  submitDate: Date,
  jobTitle: String,
  company: String,
  jobDescLink: String,
  interviewerNameAndTitle: String,
  interviewerContact: String,
  interviewerNotes: String,
  followUpEmail: {type: Boolean, "default": false}
});

module.exports = mongoose.model('Job', JobSchema);