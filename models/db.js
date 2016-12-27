const mongoose 	= require('mongoose');

// 1 - a connection string
var connectionString = 'mongodb://localhost/tracker';

// 2 - need make connection
mongoose.connect(connectionString);

// 3 - listen for events and log changes
mongoose.connection.on('connected', ()=> {
  console.log('Mongoose has connected to: ' + connectionString);
});
mongoose.connection.on('disconnected', ()=> {
  console.log('Mongoose has disconnected from: ' + connectionString);
});
mongoose.connection.on('error', (error)=> {
  console.log('Mongoose has experienced an error: ' + error);
});
