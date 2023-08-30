const { httpGet} = require('../../services/httpService');

module.exports = {
	getGenres,

};

function getGenres() {
	return httpGet(`/recommendations/available-genre-seeds`)
}
