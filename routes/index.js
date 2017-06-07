const express = require("express");
const fs = require('fs');
var router = express.Router();
router.get('/', function(req, res) {
	fs.readFile('./public/index.html', function(err, page) {
		if (err) {
			throw err
		}
		res.end(page);
	});
});
module.exports = router;
