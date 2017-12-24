const express = require('express');
const app = express();
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
const authentication = require('./routes/authentication')(router); // Import Authentication Routes
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const multer = require('multer');

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
  app.use(express.static('../client'));
  app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json
  
  var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
			console.log(req.file); 
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });
  
  app.get('/', function(req, res){
    res.send('<h1>hello world<h1/>');
  });


  app.use('/authentication', authentication); // Use Authentication routes in application

  app.listen(8080,()=>{
      console.log("Listening on port 8080");
  });