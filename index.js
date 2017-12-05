const express = require('express');
const app = express();
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
const authentication = require('./routes/authentication')(router); // Import Authentication Routes
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    // Check if database was able to connect
    if (err) {
      console.log('Could NOT connect to database: ', err); // Return error message
    } else {
      console.log('Connected to ' + config.db); // Return success message
    }
  });

  app.use(cors({ origin: 'http://localhost:4200' })); // Allows cross origin in development only
  app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json
  
  app.get('/', function(req, res){
    res.send('<h1>hello world<h1/>');
  });


  app.use('/authentication', authentication); // Use Authentication routes in application

  app.listen(8080,()=>{
      console.log("Listening on port 8080");
  });