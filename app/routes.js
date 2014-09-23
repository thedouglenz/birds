module.exports = function(app) {
	// server routes
	app.get('/api/users', function(req, res) {
		User.find(function(err, users) {
			if(err)
				res.send(err);

			res.json(users);
		});
	});

	app.post('/api/users', function(req, res) {
		// TODO var user = User() ... etc
	});

	// default
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};