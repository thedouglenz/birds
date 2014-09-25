var mongoose = require('mongoose');

var coupleSchema = mongoose.Schema({
	users : [mongoose.Schema.Types.ObjectId],
	created : Date, // Date couple created on this system
	modified : Date,
	since: Date, // Date couple truly started dating
	galleries:[
		{
			name : String,
			photos : [
				{
					fileLocation : String,
					thumbLocation : String,
					added : Date,
					caption : String
				}
			]
		}
	],
	valid : Boolean
});

module.exports = mongoose.model('Couple', coupleSchema)