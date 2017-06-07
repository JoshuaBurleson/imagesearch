const express = require("express");
const mongo = require('mongodb').MongoClient;
var router = express.Router();
var dbPath = process.env.DB;
router.get('/api/latest', function(req, res) {
	mongo.connect(dbPath, function(err, db) {
		if (err) {
			throw err
		}
		var collection = db.collection('searches');
		collection.find({}, {
			_id: 0
		}).toArray(function(err, data) {
			if (err) {
				throw err
			}
			res.end(JSON.stringify(data.reverse()));
			db.close();
		});
	});
});
module.exports = router;