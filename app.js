const express = require("express");
var app = express();
var query = require('./custom_modules/query');
var logSearch = require('./custom_modules/logSearch');
//latest returns 10 most recent searches when /api/latest URL path is requested
app.use(require('./routes/latest'));
app.use(require('./routes/index'));
app.get('*', function(req, res) {
	//search parameters
	res.writeHead(200, 'text/html');
	var page = req.query.offset;
	//query will res.end() search results in JSON format
	query(req.url.slice(1), Number(page), res);
	//add search to database
	logSearch(req.path.slice(1));
}).listen(process.env.PORT || 3000);
