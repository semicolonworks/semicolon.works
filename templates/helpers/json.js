module.exports = function (object) {
	var json = '';
	try {
		json = JSON.stringify(object);
	} catch (e) {
		console.error(e);
	}
	return json;
};