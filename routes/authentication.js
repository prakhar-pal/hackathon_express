const User = require('../models/user'); // Import User Model Schema
const Admin = require('../models/admin'); // Import Admin Model Schema
const Host = require('../models/host'); // Import Admin Model Schema
const Event = require('../models/event'); // Import Admin Model Schema
const Evaluator = require('../models/evaluator'); // Import Admin Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {

  router.get('/admin', (req, res) => {
    Admin.find({}, function (err, admin) {
       if (err)
           res.send(err);
       else {
           res.json(admin);
       }
   });
 });

 /* ========
 ADMIN LOGIN ROUTE
  ======== */

 router.post('/admin_login', (req, res) => {
  // Check if username was provided
  if (!req.body.admin_username) {
    res.json({ success: false, message: 'No username was provided' }); // Return error
  } else {
    // Check if password was provided
    if (!req.body.admin_password) {
      res.json({ success: false, message: 'No password was provided.' }); // Return error
    } else {
      // Check if username exists in database
      Admin.findOne({ admin_username: req.body.admin_username.toLowerCase() }, (err, admin) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: err }); // Return error
        } else {
          // Check if username was found
          if (!admin) {
            res.json({ success: false, message: 'Username not found.' }); // Return error
          } else {
            const validPassword = admin.comparePassword(req.body.admin_password); // Compare password provided to password in database
            // Check if password is a match
            if (!validPassword) {
              res.json({ success: false, message: 'Password invalid' }); // Return error
            } else {
              const token2 = jwt.sign({ adminId: admin._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                res.json({
                  success: true,
                  message: 'Success!',
                  token2: token2,
                  admin: {
                    admin_username: admin.admin_username
                  }
                }); // Return success and token to frontend
            }
          }
        }
      });
    }
  }
});


/* ========
  ADMIN REGISTER ROUTE
  ======== */

 router.post('/admin_register', (req, res) => {
  if (!req.body.admin_email) {
    res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
  } else {
    if (!req.body.admin_username) {
      res.json({ success: false, message: 'You must provide a username' }); // Return error
    } else {
      if (!req.body.admin_password) {
        res.json({ success: false, message: 'You must provide a password' }); // Return error
      } else {
        let admin = new Admin({
          admin_email: req.body.admin_email.toLowerCase(),
          admin_username: req.body.admin_username.toLowerCase(),
          admin_password: req.body.admin_password
        });

        admin.save((err) => {
          if(err){
            if (err.code === 11000) {
              res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
            }else{
              if (err.errors){
                if (err.errors.email) {
                  res.json({ success: false, message: err.errors.admin_email.message }); // Return error
                }else{
                  if (err.errors.username) {
                    res.json({ success: false, message: err.errors.admin_username.message }); // Return error
                  }else{
                    if (err.errors.password) {
                      res.json({ success: false, message: err.errors.admin_password.message }); // Return error
                    }else{
                      res.json({success:false, message: err});
                    }
                  }
                }
              } else{
                res.json({ success: false, message :  'Could not save user. Err : ',err});
              }                
            }           
          } else {
            res.json({success:true, message: 'Admin Account registered !'});
          }
        });

      }        
    }
  }
});


router.post('/add-event', (req, res) => {
  if (!req.body.event_title) {
    res.json({ success: false, message: 'You must provide an event_title' }); // Return error
  } else {
    if (!req.body.host_username) {
      res.json({ success: false, message: 'You must provide a host username' }); // Return error
    } else {
        let event = new Event({
          event_title: req.body.event_title,
          host_username: req.body.host_username,
          event_description: req.body.event_description
        });

        event.save((err) => {
          if(err){
            if (err.code === 11000) {
              res.json({ success: false, message: 'event_title or host_username already exists' }); // Return error
            }else{
              if (err.errors){
                if (err.errors.event_title) {
                  res.json({ success: false, message: err.errors.event_title.message }); // Return error
                }else{
                  if (err.errors.host_username) {
                    res.json({ success: false, message: err.errors.host_username.message }); // Return error
                  }else{
                    if (err.errors.event_description) {
                      res.json({ success: false, message: err.errors.event_description.message }); // Return error
                    }else{
                      res.json({success:false, message: err});
                    }
                  }
                }
              } else{
                res.json({ success: false, message :  'Could not save event. Err : ',err});
              }                
            }           
          } else {
            res.json({success:true, message: 'Event registered !'});
          }
        });

           
    }
  }
});


 /* ========
 Host LOGIN ROUTE
  ======== */

  router.post('/host_login', (req, res) => {
    // Check if username was provided
    if (!req.body.host_username) {
      res.json({ success: false, message: 'No username was provided' }); // Return error
    } else {
      // Check if password was provided
      if (!req.body.host_password) {
        res.json({ success: false, message: 'No password was provided.' }); // Return error
      } else {
        // Check if username exists in database
        Host.findOne({ host_username: req.body.host_username.toLowerCase() }, (err, host) => {
          // Check if error was found
          if (err) {
            res.json({ success: false, message: err }); // Return error
          } else {
            // Check if username was found
            if (!host) {
              res.json({ success: false, message: 'Username not found.' }); // Return error
            } else {
              const validPassword = host.comparePassword(req.body.host_password); // Compare password provided to password in database
              // Check if password is a match
              if (!validPassword) {
                res.json({ success: false, message: 'Password invalid' }); // Return error
              } else {
                const token3 = jwt.sign({ hostId: host._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                  res.json({
                    success: true,
                    message: 'Success!',
                    token3: token3,
                    host: {
					  host_username:host.host_username
                    }
                  }); // Return success and token to frontend
              }
            }
          }
        });
      }
    }
  });
  
  
  /* ========
    Host REGISTER ROUTE
    ======== */
  
   router.post('/host_register', (req, res) => {
    if (!req.body.host_email) {
      res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
    } else {
      if (!req.body.host_username) {
        res.json({ success: false, message: 'You must provide a username' }); // Return error
      } else {
        if (!req.body.host_password) {
          res.json({ success: false, message: 'You must provide a password' }); // Return error
        } else {
          let host = new Host({
            host_email: req.body.host_email.toLowerCase(),
            host_username: req.body.host_username.toLowerCase(),
            host_password: req.body.host_password
          });
  
          host.save((err) => {
            if(err){
              if (err.code === 11000) {
                res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
              }else{
                if (err.errors){
                  if (err.errors.email) {
                    res.json({ success: false, message: err.errors.host_email.message }); // Return error
                  }else{
                    if (err.errors.username) {
                      res.json({ success: false, message: err.errors.host_username.message }); // Return error
                    }else{
                      if (err.errors.password) {
                        res.json({ success: false, message: err.errors.host_password.message }); // Return error
                      }else{
                        res.json({success:false, message: err});
                      }
                    }
                  }
                } else{
                  res.json({ success: false, message :  'Could not save user. Err : ',err});
                }                
              }           
            } else {
              res.json({success:true, message: 'host Account registered !'});
            }
          });
  
        }        
      }
    }
  });
 

   /* ========
 Evaluator LOGIN ROUTE
  ======== */

 router.post('/evaluator_login', (req, res) => {
  // Check if username was provided
  if (!req.body.evaluator_username) {
    res.json({ success: false, message: 'No username was provided' }); // Return error
  } else {
    // Check if password was provided
    if (!req.body.evaluator_password) {
      res.json({ success: false, message: 'No password was provided.' }); // Return error
    } else {
      // Check if username exists in database
      Evaluator.findOne({ evaluator_username: req.body.evaluator_username.toLowerCase() }, (err, evaluator) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: err }); // Return error
        } else {
          // Check if username was found
          if (!evaluator) {
            res.json({ success: false, message: 'Username not found.' }); // Return error
          } else {
            const validPassword = evaluator.comparePassword(req.body.evaluator_password); // Compare password provided to password in database
            // Check if password is a match
            if (!validPassword) {
              res.json({ success: false, message: 'Password invalid' }); // Return error
            } else {
              const token4 = jwt.sign({ evaluatorId: evaluator._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                res.json({
                  success: true,
                  message: 'Success!',
                  token4: token4,
                  evaluator: {
                    evaluator_username: evaluator.evaluator_username
                  }
                }); // Return success and token to frontend
            }
          }
        }
      });
    }
  }
});


/* ========
 Evaluator REGISTER ROUTE
  ======== */

 router.post('/evaluator_register', (req, res) => {
  if (!req.body.evaluator_email) {
    res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
  } else {
    if (!req.body.evaluator_username) {
      res.json({ success: false, message: 'You must provide a username' }); // Return error
    } else {
      if (!req.body.evaluator_password) {
        res.json({ success: false, message: 'You must provide a password' }); // Return error
      } else {
        let evaluator = new Evaluator({
          evaluator_email: req.body.evaluator_email.toLowerCase(),
          evaluator_username: req.body.evaluator_username.toLowerCase(),
          evaluator_password: req.body.evaluator_password
        });

        evaluator.save((err) => {
          if(err){
            if (err.code === 11000) {
              res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
            }else{
              if (err.errors){
                if (err.errors.email) {
                  res.json({ success: false, message: err.errors.evaluator_email.message }); // Return error
                }else{
                  if (err.errors.username) {
                    res.json({ success: false, message: err.errors.evaluator_username.message }); // Return error
                  }else{
                    if (err.errors.password) {
                      res.json({ success: false, message: err.errors.evaluator_password.message }); // Return error
                    }else{
                      res.json({success:false, message: err});
                    }
                  }
                }
              } else{
                res.json({ success: false, message :  'Could not save user. Err : ',err});
              }                
            }           
          } else {
            res.json({success:true, message: 'evaluator Account registered !'});
          }
        });

      }        
    }
  }
});

/* ========
  USER REGISTER ROUTE
  ======== */

  router.post('/register', (req, res) => {
    if (!req.body.email) {
      res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
    } else {
      if (!req.body.username) {
        res.json({ success: false, message: 'You must provide a username' }); // Return error
      } else {
        if (!req.body.password) {
          res.json({ success: false, message: 'You must provide a password' }); // Return error
        } else {
          let user = new User({
            email: req.body.email.toLowerCase(),
            username: req.body.username.toLowerCase(),
            password: req.body.password
          });

          user.save((err) => {
            if(err){
              if (err.code === 11000) {
                res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
              }else{
                if (err.errors){
                  if (err.errors.email) {
                    res.json({ success: false, message: err.errors.email.message }); // Return error
                  }else{
                    if (err.errors.username) {
                      res.json({ success: false, message: err.errors.username.message }); // Return error
                    }else{
                      if (err.errors.password) {
                        res.json({ success: false, message: err.errors.password.message }); // Return error
                      }else{
                        res.json({success:false, message: err});
                      }
                    }
                  }
                } else{
                  res.json({ success: false, message :  'Could not save user. Err : ',err});
                }                
              }           
            } else {
              res.json({success:true, message: 'Account registered !'});
            }
          });

        }        
      }
    }
  });

 /* ========
  LOGIN ROUTE
  ======== */
  router.post('/login', (req, res) => {
    // Check if username was provided
    if (!req.body.username) {
      res.json({ success: false, message: 'No username was provided' }); // Return error
    } else {
      // Check if password was provided
      if (!req.body.password) {
        res.json({ success: false, message: 'No password was provided.' }); // Return error
      } else {
        // Check if username exists in database
        User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
          // Check if error was found
          if (err) {
            res.json({ success: false, message: err }); // Return error
          } else {
            // Check if username was found
            if (!user) {
              res.json({ success: false, message: 'Username not found.' }); // Return error
            } else {
              const validPassword = user.comparePassword(req.body.password); // Compare password provided to password in database
              // Check if password is a match
              if (!validPassword) {
                res.json({ success: false, message: 'Password invalid' }); // Return error
              } else {
                const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                res.json({
                  success: true,
                  message: 'Success!',
                  token: token,
                  user: {
                    username: user.username
                  }
                }); // Return success and token to frontend
              }
            }
          }
        });
      }
    }
  });
  
  /* ========
  USER dashboard ROUTE
  ======== */

  router.get('/dashboard', (req, res) => {
	   User.find({}, function (err, users) {
        if (err)
            res.send(err);
        else {
            res.json(users);
        }
    });
  });
  
  router.get('/hosts', (req, res) => {
	   Host.find({}, function (err, hosts) {
        if (err)
            res.send(err);
        else {
            res.json(hosts);
        }
    });
  });
  
    router.get('/events', (req, res) => {
	   Event.find({}, function (err, events) {
        if (err)
            res.send(err);
        else {
            res.json(events);
        }
    });
  });
  
   router.get('/events', (req, res) => {
	   Event.find({}, function (err, events) {
        if (err)
            res.send(err);
        else {
            res.json(events);
        }
    });
  });
  router.get('/get_host_events/:host_username', (req, res) => {
	   Event.find({ host_username: req.params.host_username }, function (err, events) {
        if (err)
            res.send(err);
        else {
            res.json(events);
        }
    });
  });
  
    router.delete('/delete_host/:_id', (req, res) => {
    Host.findOneAndRemove({ _id: req.params._id }, function (err, host) {
        if (err)
            res.send(err);
        else {
            Host.find({}, function (err, hosts) {
				if (err)
					res.send(err);
				else {
					res.json(hosts);
				}
			});
        }
    });
});
  
    router.delete('/delete_event/:_id', (req, res) => {
    Event.findOneAndRemove({ _id: req.params._id }, function (err, event) {
        if (err)
            res.send(err);
        else {
            Event.find({}, function (err, events) {
				if (err)
					res.send(err);
				else {
					res.json(events);
				}
			});
        }
    });
});
  
  
  
  router.delete('/delete_user/:_id', (req, res) => {
    User.findOneAndRemove({ _id: req.params._id }, function (err, book) {
        if (err)
            res.send(err);
        else {
            User.find({}, function (err, users) {
				if (err)
					res.send(err);
				else {
					res.json(users);
				}
			});
        }
    });
});
  
   /* ================================================
  MIDDLEWARE - Used to grab user's token from headers
  ================================================ */
  router.use((req, res, next) => {
    const token = req.headers['authorization']; // Create token found in headers
    // Check if token was found in headers
    if (!token) {
      res.json({ success: false, message: 'No token provided' }); // Return error
    } else {
      // Verify the token is valid
      jwt.verify(token, config.secret, (err, decoded) => {
        // Check if error is expired or invalid
        if (err) {
          res.json({ success: false, message: 'Token invalid: ' + err }); // Return error for token validation
        } else {
          req.decoded = decoded; // Create global variable to use in any request beyond
          next(); // Exit middleware
        }
      });
    }
  });

  /* ===============================================================
     Route to get user's profile data
  =============================================================== */
  router.get('/profile', (req, res) => {
    // Search for user in database
    User.findOne({ _id: req.decoded.userId }).select('username email').exec((err, user) => {
      // Check if error connecting
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        // Check if user was found in database
        if (!user) {
          res.json({ success: false, message: 'User not found' }); // Return error, user was not found in db
        } else {
          res.json({ success: true, user: user }); // Return success, send user object to frontend for profile
        }
      }
    });
  });
  
 
  
  
  return router; // Return router object to main index.js
}
