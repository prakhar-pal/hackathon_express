/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// User Model Definition
const submissionSchema = new Schema({
  team_id: { type: String},
  file_name: { type: String },
});

// Export Module/Schema
module.exports = mongoose.model('Submission', submissionSchema);
