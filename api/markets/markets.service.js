const { httpGet } = require('../../services/httpService');

module.exports = {
	getMarkets,

};

function getMarkets() {
	return httpGet(`/markets`)
}
