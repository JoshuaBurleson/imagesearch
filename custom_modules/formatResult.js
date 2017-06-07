function format(json) {
	return json.map(function(obj) {
		return {
			url: obj.link,
			altText: obj.snippet,
			thumbnail: obj.image.thumbnailLink,
			context: obj.image.contextLink
		};
	});
}
module.exports = format;