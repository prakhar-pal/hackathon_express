/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
const bcrypt = require('bcrypt-nodejs'); // A native JS bcrypt library for NodeJS

// User Model Definition
const evaluatorSchema = new Schema({
	evaluator_email: { type: String, required: true, unique: true, lowercase: true},
  evaluator_username: { type: String, required: true, unique: true, lowercase: true},
  evaluator_password: { type: String, required: true }
});

// Schema Middleware to Encrypt Password
evaluatorSchema.pre('save', function(next) {
    // Ensure password is new or modified before applying encryption
    if (!this.isModified('evaluator_password'))
      return next();
  
    // Apply encryption
    bcrypt.hash(this.evaluator_password, null, null, (err, hash) => {
      if (err) return next(err); // Ensure no errors
      this.evaluator_password = hash; // Apply encryption to password
      next(); // Exit middleware
    });
  });
  

// Methods to compare password to encrypted password upon login
evaluatorSchema.methods.comparePassword = function(evaluator_password) {
    return bcrypt.compareSync(evaluator_password, this.evaluator_password); // Return comparison of login password to password in database (true or false)
  };

// Export Module/Schema
module.exports = mongoose.model('Evaluator', evaluatorSchema);
