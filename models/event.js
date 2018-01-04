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
  prize1 : {type: String},
  prize2 : {type: String},
  prize3 : {type: String},
  publish : {type: String},
  location: {type: String},
  live: {type: String},
  archived: {type: String},
  future: {type: String},
  time: {type: String},
  display_time: {type: String},
  days: {type: String},
  hours: {type: String},
  minutes: {type: String},
  evaluator_username : {type:String},
  evaluators_array : {'type': {type: String}, 'value': [String]}
});

// Export Module/Schema
module.exports = mongoose.model('Event', eventSchema);
