/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// User Model Definition
const eventSchema = new Schema({
  event_title: { type: String, required: true, unique: true},
  host_username: { type: String, required: true},
  event_description: { type: String },
  start: {type: Date},
  end: {type: Date},
  max_team_members : {type: Number},
  max_ideas : {type: Number},
  prize : {type: Number},
  publish : {type: String},
  location: {type: String},
  live: {type: String},
  archived: {type: String},
  future: {type: String},
  evaluator_username : {type:String}
});

// Export Module/Schema
module.exports = mongoose.model('Event', eventSchema);
