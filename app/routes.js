module.exports = function(app) {

	// server routes
	app.get('/api/users', function(req, res) {
		var User = require('../models/user');
		console.log("api call to /api/users GET");
		if(!Object.keys(req.query).length) { // is query empty?
			User.find(function(err, users) {
				if(err)
					res.send(err);

				res.json(users);
			});
		} else {
			User.findOne({'local.email':req.query.email}, function(err, user) {
				res.json(user);
			});
		}
	});

	app.post('/api/users', function(req, res) {
		var User = require('../models/user');
		newUser = new User();
		
		newUser.username = req.body.email;
		newUser.local.realname = req.body.fullname;
		newUser.local.email = req.body.email;
		newUser.local.password = newUser.generateHash(req.body.password);
		
		var now = Date();
		newUser.local.created = now;
		newUser.local.modified = now;

		newUser.local. valid = false;

		newUser.save(function(err) {
			if(err) {
				throw err;
			}
			console.log("in the new user save function");
		});
	});

	app.get('/api/couples', function(req, res) {
		var Couple = require('../models/couple');
		console.log("api call to /api/couples GET");
		Couple.find(function(err, couples) {
			if(err)
				res.send(err);

			res.json(couples);
		});
	});

	app.post('/api/couples', function(req, res) {
		var Couple = require('../models/couple');
		newCouple = new Couple();

		var now = Date();
		newCouple.created = now;
		newCouple.modified = now;
		newCouple.since = req.body.startDate;
		newCouple.users = Array(req.body.me, req.body.other);
		newCouple.valid = false;

		newCouple.save(function(err) {
			if(err)
				throw err;
			else {
				// Send an email to the other person
				// inviting them to hit another api url
				// to accept this proposed connection
			}
		});
	});

	// default
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};