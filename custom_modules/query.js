const google = require("googleapis");
var search = google.customsearch('v1');
var formatResult = require("./formatResult");
//define parameters which will be provided in our search
var auth = process.env.AUTH_KEY //Google API Key
cx = process.env.CX //Custom Google Search Engine
num = 10, //results per page
	searchType = 'image';

function query(qString, page, res) {
	//ensure page is within range
	if (page > 0 && page !== undefined && !isNaN(page) && page < 10) {
		page *= 10;
	} else {
		page = 1;
	}
	//provide search parameters
	search.cse.list({
		q: qString,
		cx: cx,
		auth: auth,
		searchType: searchType,
		num: num,
		start: page
	}, function(err, results) {
		if (err) {
			console.log('An error occured: ' + err);
			if (err == 'Error: Invalid Value') {
				res.end('Nothing to Show');
			}
		}
		res.write(JSON.stringify(formatResult(results.items)));
		res.end();
	});
}
module.exports = query;