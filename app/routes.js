module.exports = function(app) {

	// server routes
	app.get('/api/users', function(req, res) {
		var User = require('../models/user');
		console.log("api call to /api/users/ GET");
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
		
		newUser.local.email = req.body.username;
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

	// default
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};