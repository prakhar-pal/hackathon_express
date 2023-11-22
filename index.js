const express = require('express');
const app = express();
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
const authentication = require('./routes/authentication')(router); // Import Authentication Routes
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property

const PORT = process.env.PORT || 8080;
console.log("Port is "+PORT);
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    // Check if database was able to connect
    if (err) {
      console.log('Could NOT connect to database: ', err); // Return error message
    } else {
      console.log('Connected to ' + config.db); // Return success message
    }
  });

  app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });
  app.use(express.static(__dirname + '/uploads'));
  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json



  app.get('/', function(req, res){
    res.sendFile(__dirname+'/public/index.html');
  });


  app.use('/authentication', authentication);

  app.get('*',(req,res)=>{
      res.redirect('/');
  });


  app.listen(PORT,()=>{
      console.log("Listening on port "+PORT);
  });
