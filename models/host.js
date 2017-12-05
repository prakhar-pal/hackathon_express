/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
const bcrypt = require('bcrypt-nodejs'); // A native JS bcrypt library for NodeJS

// User Model Definition
const hostSchema = new Schema({
  host_email: { type: String, required: true, unique: true, lowercase: true},
  host_username: { type: String, required: true, unique: true, lowercase: true},
  host_password: { type: String, required: true }
});

// Schema Middleware to Encrypt Password
hostSchema.pre('save', function(next) {
    // Ensure password is new or modified before applying encryption
    if (!this.isModified('host_password'))
      return next();
  
    // Apply encryption
    bcrypt.hash(this.host_password, null, null, (err, hash) => {
      if (err) return next(err); // Ensure no errors
      this.host_password = hash; // Apply encryption to password
      next(); // Exit middleware
    });
  });
  

// Methods to compare password to encrypted password upon login
hostSchema.methods.comparePassword = function(host_password) {
    return bcrypt.compareSync(host_password, this.host_password); // Return comparison of login password to password in database (true or false)
  };

// Export Module/Schema
module.exports = mongoose.model('Host', hostSchema);
