var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	local: {
		username: String,
		realname : String,
		password : String,
		email : String,
		created : Date,
		modified : Date,
		valid : Boolean
	},
	facebook : {
		id : String,
		token : String,
		email : String,
		name : String
	},
	google: {
		id : String,
		token : String,
		email : String,
		name : String
	}
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);