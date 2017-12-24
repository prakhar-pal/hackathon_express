/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// User Model Definition
const teamSchema = new Schema({
  username: { type: String},
  team_name: { type: String },
  member1: { type: String },
  member2: { type: String },
  member3: { type: String },
  event_id: { type: String },
  event_title: { type: String }
});

// Export Module/Schema
module.exports = mongoose.model('Team', teamSchema);
