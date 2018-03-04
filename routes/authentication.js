const User = require('../models/user'); // Import User Model Schema
const Admin = require('../models/admin'); // Import Admin Model Schema
const Host = require('../models/host'); // Import Admin Model Schema
const Event = require('../models/event'); // Import Admin Model Schema
const Submission = require('../models/submission'); // Import Admin Model Schema
const Evaluation = require('../models/evaluation'); // Import Admin Model Schema
const Evaluator = require('../models/evaluator'); // Import Admin Model Schema
const Team = require('../models/team'); // Import Admin Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration
const moment = require('moment');
const multer = require('multer');
const mongo = require('mongodb');
var request = require('request');
var token = null;

module.exports = (router) => {

    router.post('/callback', (req, res) => {
        console.log('Params: ' + JSON.stringify(req.body))
        var options = {
            url: 'https://www.linkedin.com/oauth/v2/accessToken?format=json',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
            },
            form: {
                'grant_type': 'authorization_code',
                'code': req.body.code,
                'redirect_uri': 'http://localhost:4200/demo',
                'client_id': '816x7fwlimaa7s',
                'client_secret': 'lcb3uhIEsPQ0PTOd'
            },
            json: true
        }
        request(options, (err, response, body) => {
            console.log("Token Body: " + JSON.stringify(body));
            console.log();
            console.log("Token Response: " + JSON.stringify(response));
            console.log();


            if (body.error) {
                res.json({
                    success: false,
                    error: body.error,
                    error_description: response.body.access_token
                });
            } else {
                token = body.access_token;
                console.log("Access Token: " + token);
                console.log();
                //res.json({success:true,access_token:body.access_token});
                console.log('Getting user info...');
                console.log();

                var userOptions = {
                    url: 'https://api.linkedin.com/v1/people/~:(firstName,lastName,email-address)?format=json',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json',
                        'Accept-Charset': 'utf-8',
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                }
                console.log(userOptions.headers);
                request(userOptions, (err, response, body) => {
                    console.log("User RESPONSE: " + JSON.stringify(response));
                    console.log();
                    console.log("User BODY: " + JSON.stringify(body));
                    console.log();
                    console.log(body);
                    const myToken = jwt.sign({
                        emailAddress: body.emailAddress
                    }, config.secret, {
                        expiresIn: '24h'
                    });

                    let user = new User({
                        email: body.emailAddress,
                        username: body.firstName + " " + body.lastName
                    });

                    user.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({
                                    myToken: myToken,
                                    message: 'Username or e-mail already exists',
                                    user: {
                                        email: body.emailAddress,
                                        username: body.firstName + " " + body.lastName
                                    }
                                });
                            }
                        } else {
                            res.json({
                                myToken: myToken,
                                message: 'User Registered',
                                user: {
                                    email: body.emailAddress,
                                    username: body.firstName + " " + body.lastName
                                }
                            });
                        }
                    });

                });
            }
        });

    });




    router.post('/upload', function(req, res, next) {
        var storage = multer.diskStorage({ //multers disk storage settings
            destination: function(req, file, cb) {
                cb(null, './uploads/');
            },
            filename: function(req, file, cb) {
                var datetimestamp = Date.now();
                cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
            }
        });
        var upload = multer({ //multer settings
            storage: storage
        }).single('file');
        upload(req, res, function(err) {

            let submission = new Submission({
                team_id: req.body._id,
                username: req.body.username,
                file_name: req.file.filename
            });
            submission.save();
            console.log(req.file);
            if (err) {
                res.json({
                    error_code: 1,
                    err_desc: err
                });
                return;
            }
            res.json({
                error_code: 0,
                err_desc: null
            });
        });
    })




    router.get('/admin', (req, res) => {
        Admin.find({}, function(err, admin) {
            if (err)
                res.send(err);
            else {
                res.json(admin);
            }
        });
    });

    router.get('/team_details/:username/:_id', (req, res) => {
		console.log(req.params.username);
		console.log(req.params._id);
        Team.findOne({
            username: req.params.username,
			event_id: req.params._id
        }, function(err, team) {
            if (err)
                res.send(err);
            else { 
                res.json(team);
            }
        });
    });

    router.get('/evaluation_data/:team_id', (req, res) => {
        Evaluation.findOne({
            team_id: req.params.team_id
        }, function(err, data) {
            if (err)
                res.send(err);
            else {
                if (data == null)
                    res.json({});
                else
                    res.json(data);
            }
        });
    });


    router.get('/eval_eventwise_team_details/:event_id', (req, res) => {
        Team.find({
            event_id: req.params.event_id
        }, function(err, teams) {
            if (err)
                res.send(err);
            else {
                res.json(teams);
            }
        });
    });
	router.get('/host_eventwise_team_details/:event_id', (req, res) => {
        Team.find({
            event_id: req.params.event_id
        }, function(err, teams) {
            if (err)
                res.send(err);
            else {
                res.json(teams);
            }
        });
    });




    router.get('/teamwise_files/:team_id', (req, res) => {
        Submission.find({
            team_id: req.params.team_id
        }, function(err, a) {
            if (err)
                res.send(err);
            else {
                res.json(a);
            }
        });
    });



    router.post('/team_registration', (req, res) => {
        let team = new Team({
            username: req.body.username,
            team_name: req.body.team_name,
            member1: req.body.member1,
            member2: req.body.member2,
            member3: req.body.member3,
            event_id: req.body.event_id,
            event_title: req.body.event_title
        });
        team.save((err) => {
            if (err) {
                res.json({
                    success: false,
                    message: 'Could not save team. Err : ',
                    err
                });
            } else {
                res.json({
                    success: true,
                    message: 'Team successfully  registered !'
                });
            }
        });
    });




    /* ========
    ADMIN LOGIN ROUTE
     ======== */

    router.post('/admin_login', (req, res) => {
        // Check if username was provided
        if (!req.body.admin_username) {
            res.json({
                success: false,
                message: 'No username was provided'
            }); // Return error
        } else {
            // Check if password was provided
            if (!req.body.admin_password) {
                res.json({
                    success: false,
                    message: 'No password was provided.'
                }); // Return error
            } else {
                // Check if username exists in database
                Admin.findOne({
                    admin_username: req.body.admin_username.toLowerCase()
                }, (err, admin) => {
                    // Check if error was found
                    if (err) {
                        res.json({
                            success: false,
                            message: err
                        }); // Return error
                    } else {
                        // Check if username was found
                        if (!admin) {
                            res.json({
                                success: false,
                                message: 'Username not found.'
                            }); // Return error
                        } else {
                            const validPassword = admin.comparePassword(req.body.admin_password); // Compare password provided to password in database
                            // Check if password is a match
                            if (!validPassword) {
                                res.json({
                                    success: false,
                                    message: 'Password invalid'
                                }); // Return error
                            } else {
                                const token2 = jwt.sign({
                                    adminId: admin._id
                                }, config.secret, {
                                    expiresIn: '24h'
                                }); // Create a token for client
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
            res.json({
                success: false,
                message: 'You must provide an e-mail'
            }); // Return error
        } else {
            if (!req.body.admin_username) {
                res.json({
                    success: false,
                    message: 'You must provide a username'
                }); // Return error
            } else {
                if (!req.body.admin_password) {
                    res.json({
                        success: false,
                        message: 'You must provide a password'
                    }); // Return error
                } else {
                    let admin = new Admin({
                        admin_email: req.body.admin_email.toLowerCase(),
                        admin_username: req.body.admin_username.toLowerCase(),
                        admin_password: req.body.admin_password
                    });

                    admin.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({
                                    success: false,
                                    message: 'Username or e-mail already exists'
                                }); // Return error
                            } else {
                                if (err.errors) {
                                    if (err.errors.email) {
                                        res.json({
                                            success: false,
                                            message: err.errors.admin_email.message
                                        }); // Return error
                                    } else {
                                        if (err.errors.username) {
                                            res.json({
                                                success: false,
                                                message: err.errors.admin_username.message
                                            }); // Return error
                                        } else {
                                            if (err.errors.password) {
                                                res.json({
                                                    success: false,
                                                    message: err.errors.admin_password.message
                                                }); // Return error
                                            } else {
                                                res.json({
                                                    success: false,
                                                    message: err
                                                });
                                            }
                                        }
                                    }
                                } else {
                                    res.json({
                                        success: false,
                                        message: 'Could not save user. Err : ',
                                        err
                                    });
                                }
                            }
                        } else {
                            res.json({
                                success: true,
                                message: 'Admin Account registered !'
                            });
                        }
                    });

                }
            }
        }
    });


    router.post('/add-event', (req, res) => {
        if (!req.body.event_title) {
            res.json({
                success: false,
                message: 'You must provide an event_title'
            }); // Return error
        } else {
            if (!req.body.host_username) {
                res.json({
                    success: false,
                    message: 'You must provide a host username'
                }); // Return error
            } else {
                let event = new Event({
                    event_title: req.body.event_title,
                    host_username: req.body.host_username,
                    event_description: req.body.event_description,
                    start_date: req.body.start_date,
                    end_date: req.body.end_date,
                    location: req.body.location
                });

                event.save((err) => {
                    if (err) {
                        if (err.code === 11000) {
                            res.json({
                                success: false,
                                message: 'event_title or host_username already exists'
                            }); // Return error
                        } else {
                            if (err.errors) {
                                if (err.errors.event_title) {
                                    res.json({
                                        success: false,
                                        message: err.errors.event_title.message
                                    }); // Return error
                                } else {
                                    if (err.errors.host_username) {
                                        res.json({
                                            success: false,
                                            message: err.errors.host_username.message
                                        }); // Return error
                                    } else {
                                        if (err.errors.event_description) {
                                            res.json({
                                                success: false,
                                                message: err.errors.event_description.message
                                            }); // Return error
                                        } else {
                                            res.json({
                                                success: false,
                                                message: err
                                            });
                                        }
                                    }
                                }
                            } else {
                                res.json({
                                    success: false,
                                    message: 'Could not save event. Err : ',
                                    err
                                });
                            }
                        }
                    } else {
                        res.json({
                            success: true,
                            message: 'Event registered !'
                        });
                    }
                });


            }
        }
    });


    //configure-event
    router.put('/update-event/:_id', (req, res) => {
        Event.findOneAndUpdate({
                _id: req.params._id
            }, {
                $set: {
                    event_title: req.body.event_title,
                    host_username: req.body.host_username,
                    event_description: req.body.event_description,
                    start: req.body.start,
                    end: req.body.end,
                    location: req.body.location,
                    max_team_members: req.body.max_team_members,
                    max_ideas: req.body.max_ideas,
                    prize1: req.body.prize1,
					prize2: req.body.prize2,
					prize3: req.body.prize3,
                    publish: req.body.publish,
                    evaluator_username: req.body.evaluator_username
                }
            }, {
                new: true
            },

            function(err, event) {
                if (err)
                    res.send(err);
                else {
                    Event.find({}, function(err, events) {
                        if (err)
                            res.send(err);
                        else {
                            res.json(events);
                        }
                    });

                }
            });

    });

    router.put('/update_evaluation_data/:team_id', (req, res) => {
        console.log(req.body);
        Evaluation.findOneAndUpdate({
                team_id: req.params.team_id
            }, {
                $set: {
                    team_id: req.params.team_id,
                    evaluator_username: req.body.evaluator_username,
                    criteria1: req.body.criteria1,
                    criteria2: req.body.criteria2,
                    criteria3: req.body.criteria3,
                    comments: req.body.comments
                }
            }, {
                upsert: true
            },

            function(err, user) {
                if (err)
                    res.send(err);
                else {
                    Evaluation.find({}, function(err, data) {
                        if (err)
                            res.send(err);
                        else {
                            res.json(data);
                        }
                    });
                }
            });


    });




    /* ========
    Host LOGIN ROUTE
     ======== */

    router.post('/host_login', (req, res) => {
        // Check if username was provided
        if (!req.body.host_username) {
            res.json({
                success: false,
                message: 'No username was provided'
            }); // Return error
        } else {
            // Check if password was provided
            if (!req.body.host_password) {
                res.json({
                    success: false,
                    message: 'No password was provided.'
                }); // Return error
            } else {
                // Check if username exists in database
                Host.findOne({
                    host_username: req.body.host_username.toLowerCase()
                }, (err, host) => {
                    // Check if error was found
                    if (err) {
                        res.json({
                            success: false,
                            message: err
                        }); // Return error
                    } else {
                        // Check if username was found
                        if (!host) {
                            res.json({
                                success: false,
                                message: 'Username not found.'
                            }); // Return error
                        } else {
                            const validPassword = host.comparePassword(req.body.host_password); // Compare password provided to password in database
                            // Check if password is a match
                            if (!validPassword) {
                                res.json({
                                    success: false,
                                    message: 'Password invalid'
                                }); // Return error
                            } else {
                                const token3 = jwt.sign({
                                    hostId: host._id
                                }, config.secret, {
                                    expiresIn: '24h'
                                }); // Create a token for client
                                res.json({
                                    success: true,
                                    message: 'Success!',
                                    token3: token3,
                                    host: {
                                        host_username: host.host_username
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
            res.json({
                success: false,
                message: 'You must provide an e-mail'
            }); // Return error
        } else {
            if (!req.body.host_username) {
                res.json({
                    success: false,
                    message: 'You must provide a username'
                }); // Return error
            } else {
                if (!req.body.host_password) {
                    res.json({
                        success: false,
                        message: 'You must provide a password'
                    }); // Return error
                } else {
                    let host = new Host({
                        host_email: req.body.host_email.toLowerCase(),
                        host_username: req.body.host_username.toLowerCase(),
                        host_password: req.body.host_password
                    });

                    host.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({
                                    success: false,
                                    message: 'Username or e-mail already exists'
                                }); // Return error
                            } else {
                                if (err.errors) {
                                    if (err.errors.email) {
                                        res.json({
                                            success: false,
                                            message: err.errors.host_email.message
                                        }); // Return error
                                    } else {
                                        if (err.errors.username) {
                                            res.json({
                                                success: false,
                                                message: err.errors.host_username.message
                                            }); // Return error
                                        } else {
                                            if (err.errors.password) {
                                                res.json({
                                                    success: false,
                                                    message: err.errors.host_password.message
                                                }); // Return error
                                            } else {
                                                res.json({
                                                    success: false,
                                                    message: err
                                                });
                                            }
                                        }
                                    }
                                } else {
                                    res.json({
                                        success: false,
                                        message: 'Could not save user. Err : ',
                                        err
                                    });
                                }
                            }
                        } else {
                            res.json({
                                success: true,
                                message: 'host Account registered !'
                            });
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
            res.json({
                success: false,
                message: 'No username was provided'
            }); // Return error
        } else {
            // Check if password was provided
            if (!req.body.evaluator_password) {
                res.json({
                    success: false,
                    message: 'No password was provided.'
                }); // Return error
            } else {
                // Check if username exists in database
                Evaluator.findOne({
                    evaluator_username: req.body.evaluator_username.toLowerCase()
                }, (err, evaluator) => {
                    // Check if error was found
                    if (err) {
                        res.json({
                            success: false,
                            message: err
                        }); // Return error
                    } else {
                        // Check if username was found
                        if (!evaluator) {
                            res.json({
                                success: false,
                                message: 'Username not found.'
                            }); // Return error
                        } else {
                            const validPassword = evaluator.comparePassword(req.body.evaluator_password); // Compare password provided to password in database
                            // Check if password is a match
                            if (!validPassword) {
                                res.json({
                                    success: false,
                                    message: 'Password invalid'
                                }); // Return error
                            } else {
                                const token4 = jwt.sign({
                                    evaluatorId: evaluator._id
                                }, config.secret, {
                                    expiresIn: '24h'
                                }); // Create a token for client
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
            res.json({
                success: false,
                message: 'You must provide an e-mail'
            }); // Return error
        } else {
            if (!req.body.evaluator_username) {
                res.json({
                    success: false,
                    message: 'You must provide a username'
                }); // Return error
            } else {
                if (!req.body.evaluator_password) {
                    res.json({
                        success: false,
                        message: 'You must provide a password'
                    }); // Return error
                } else {
                    let evaluator = new Evaluator({
                        evaluator_email: req.body.evaluator_email.toLowerCase(),
                        evaluator_username: req.body.evaluator_username.toLowerCase(),
                        evaluator_password: req.body.evaluator_password
                    });

                    evaluator.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({
                                    success: false,
                                    message: 'Username or e-mail already exists'
                                }); // Return error
                            } else {
                                if (err.errors) {
                                    if (err.errors.email) {
                                        res.json({
                                            success: false,
                                            message: err.errors.evaluator_email.message
                                        }); // Return error
                                    } else {
                                        if (err.errors.username) {
                                            res.json({
                                                success: false,
                                                message: err.errors.evaluator_username.message
                                            }); // Return error
                                        } else {
                                            if (err.errors.password) {
                                                res.json({
                                                    success: false,
                                                    message: err.errors.evaluator_password.message
                                                }); // Return error
                                            } else {
                                                res.json({
                                                    success: false,
                                                    message: err
                                                });
                                            }
                                        }
                                    }
                                } else {
                                    res.json({
                                        success: false,
                                        message: 'Could not save user. Err : ',
                                        err
                                    });
                                }
                            }
                        } else {
                            res.json({
                                success: true,
                                message: 'evaluator Account registered !'
                            });
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
            res.json({
                success: false,
                message: 'You must provide an e-mail'
            }); // Return error
        } else {
            if (!req.body.username) {
                res.json({
                    success: false,
                    message: 'You must provide a username'
                }); // Return error
            } else {
                if (!req.body.password) {
                    res.json({
                        success: false,
                        message: 'You must provide a password'
                    }); // Return error
                } else {
                    let user = new User({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password
                    });

                    user.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({
                                    success: false,
                                    message: 'Username or e-mail already exists'
                                }); // Return error
                            } else {
                                if (err.errors) {
                                    if (err.errors.email) {
                                        res.json({
                                            success: false,
                                            message: err.errors.email.message
                                        }); // Return error
                                    } else {
                                        if (err.errors.username) {
                                            res.json({
                                                success: false,
                                                message: err.errors.username.message
                                            }); // Return error
                                        } else {
                                            if (err.errors.password) {
                                                res.json({
                                                    success: false,
                                                    message: err.errors.password.message
                                                }); // Return error
                                            } else {
                                                res.json({
                                                    success: false,
                                                    message: err
                                                });
                                            }
                                        }
                                    }
                                } else {
                                    res.json({
                                        success: false,
                                        message: 'Could not save user. Err : ',
                                        err
                                    });
                                }
                            }
                        } else {
                            res.json({
                                success: true,
                                message: 'Account registered !'
                            });
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
            res.json({
                success: false,
                message: 'No username was provided'
            }); // Return error
        } else {
            // Check if password was provided
            if (!req.body.password) {
                res.json({
                    success: false,
                    message: 'No password was provided.'
                }); // Return error
            } else {
                // Check if username exists in database
                User.findOne({
                    username: req.body.username.toLowerCase()
                }, (err, user) => {
                    // Check if error was found
                    if (err) {
                        res.json({
                            success: false,
                            message: err
                        }); // Return error
                    } else {
                        // Check if username was found
                        if (!user) {
                            res.json({
                                success: false,
                                message: 'Username not found.'
                            }); // Return error
                        } else {
                            const validPassword = user.comparePassword(req.body.password); // Compare password provided to password in database
                            // Check if password is a match
                            if (!validPassword) {
                                res.json({
                                    success: false,
                                    message: 'Password invalid'
                                }); // Return error
                            } else {
                                const token = jwt.sign({
                                    userId: user._id
                                }, config.secret, {
                                    expiresIn: '24h'
                                }); // Create a token for client
                                res.json({
                                    success: true,
                                    message: 'Success!',
                                    token: token,
                                    emailAddress: user.email,
                                    user: {
                                        username: user.username,
                                        email: user.email
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
        User.find({}, function(err, users) {
            if (err)
                res.send(err);
            else {
                res.json(users);
            }
        });
    });

    router.get('/hosts', (req, res) => {
        Host.find({}, function(err, hosts) {
            if (err)
                res.send(err);
            else {
                res.json(hosts);
            }
        });
    });

    router.get('/evaluators', (req, res) => {
        Evaluator.find({}, function(err, evaluators) {
            if (err)
                res.send(err);
            else {
                res.json(evaluators);
            }
        });
    });

    router.get('/events', (req, res) => {
        Event.find({}, function(err, events) {
            if (err)
                res.send(err);
            else {
                for (i = 0; i < events.length; i++) {
                    var a = moment(events[i].start, moment.ISO_8601);
                    var b = moment(events[i].end, moment.ISO_8601);
                    events[i].live = moment().isBetween(a, b);
                    events[i].archived = moment().isAfter(a) && moment().isAfter(b);
                    events[i].future = moment().isBefore(a) && moment().isBefore(b);
                    events[i].time = a.from(moment(), true);
                    events[i].days = a.diff(moment(), 'days');
                    events[i].hours = a.diff(moment(), 'hours');
                    events[i].minutes = a.diff(moment(), 'minutes');

                }

                res.json({
                    events: events,

                });
            }
        });
    });



    router.get('/events/:_id', function(req, res) {
        Event.findOne({
            _id: req.params._id
        }, function(err, event) {
            if (err)
                res.send(err);
            else {
                var a = moment(event.start, moment.ISO_8601);
                var b = moment(event.end, moment.ISO_8601);
                event.live = moment().isBetween(a, b);
                event.archived = moment().isAfter(a) && moment().isAfter(b);
                event.future = moment().isBefore(a) && moment().isBefore(b);
                event.time = a.from(moment(), true);
                event.display_time = a.format("ddd, MMM Do YYYY, h:mm a");
                event.days = a.toObject().date - moment().toObject().date;
                event.hours = a.toObject().hours - moment().toObject().hours;
                event.minutes = a.toObject().minutes - moment().toObject().minutes;

                res.json({
                    event: event,

                });
            }
        });
    });
	
	 router.get('/event_details/:_id', function(req, res) {
        Event.findOne({
            _id: req.params._id
        }, function(err, event) {
            if (err)
                res.send(err);
            else {
				
					res.send(event);
				
				
            }
        });
    });
	
	
	

	router.get('/check_registration/:username/:event_id', function(req, res) {
        Team.findOne({
            username: req.params.username,
			event_id: req.params.event_id
        }, function(err, team) {
            if (err)
                res.send(err);
            else {
					res.json(team);
                
            }
        });
    });
	
	
	
	
    router.get('/get_host_events/:host_username', (req, res) => {
        Event.find({
            host_username: req.params.host_username
        }, function(err, events) {
            if (err)
                res.send(err);
            else {
                res.json(events);
            }
        });
    });


    // router.get('/get_evaluator_events/:evaluator_username', (req, res) => {
    // Event.find({ evaluator_username: req.params.evaluator_username }, function (err, events) {
    // if (err)
    // res.send(err);
    // else {
    // res.json(events);
    // }
    // });
    // });

    router.get('/get_evaluator_events/:evaluator_username', (req, res) => {
        Event.find({
            evaluator_username: req.params.evaluator_username
        }, function(err, events) {
            if (err)
                res.send(err);
            else {
                res.json(events);
            }
        });
    });

    router.delete('/delete_host/:_id', (req, res) => {
        Host.findOneAndRemove({
            _id: req.params._id
        }, function(err, host) {
            if (err)
                res.send(err);
            else {
                Host.find({}, function(err, hosts) {
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
        Event.findOneAndRemove({
            _id: req.params._id
        }, function(err, event) {
            if (err)
                res.send(err);
            else {
                Event.find({}, function(err, events) {
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
        User.findOneAndRemove({
            _id: req.params._id
        }, function(err, book) {
            if (err)
                res.send(err);
            else {
                User.find({}, function(err, users) {
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
            res.json({
                success: false,
                message: 'No token provided'
            }); // Return error
        } else {
            // Verify the token is valid
            jwt.verify(token, config.secret, (err, decoded) => {
                // Check if error is expired or invalid
                if (err) {
                    res.json({
                        success: false,
                        message: 'Token invalid: ' + err
                    }); // Return error for token validation
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
        User.findOne({
            _id: req.decoded.userId
        }).select('username email').exec((err, user) => {
            // Check if error connecting
            if (err) {
                res.json({
                    success: false,
                    message: err
                }); // Return error
            } else {
                // Check if user was found in database
                if (!user) {
                    res.json({
                        success: false,
                        message: 'User not found'
                    }); // Return error, user was not found in db
                } else {
                    res.json({
                        success: true,
                        user: user
                    }); // Return success, send user object to frontend for profile
                }
            }
        });
    });




    return router; // Return router object to main index.js
}