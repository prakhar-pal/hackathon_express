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
  event_description: { type: String }
});

// Export Module/Schema
module.exports = mongoose.model('Event', eventSchema);
