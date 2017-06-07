const mongo = require('mongodb').MongoClient;
var dbPath = process.env.DB;

function logSearch(search) {
	if(search == "favicon.ico"){
		return;
	}
	//connect to database
	mongo.connect(dbPath, function(err, db) {
		if (err) {
			throw err;
		}
		var dateTime = new Date();
		//create new entry to be logged
		var newEntry = {
			search: search,
			when: dateTime.toISOString()
		};
		//define which collection in the db you would like work with
		var collection = db.collection('searches');
		//access the data within the defined collection
		collection.find({}).toArray(function(err, json) {
			if (err) {
				throw err;
			}
			//we only need 10 entry
			if (json.length >= 10) {
				//remove first (oldest) entry if more than 10 exist
				collection.remove(json[0]);
			}
			//insert our new entry
			collection.insert(newEntry);
			db.close();
		});
	});
}
module.exports = logSearch;
