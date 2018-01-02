/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// User Model Definition
const evaluationSchema = new Schema({
  team_id : { type: String},
  evaluator_username : { type: String},
  criteria1 : { type: Number},
  criteria2 : { type: Number},
  criteria3 : { type: Number},
  comments : { type: String}
  
});

// Export Module/Schema
module.exports = mongoose.model('Evaluation', evaluationSchema);
