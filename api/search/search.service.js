const { httpGet } = require('../../services/httpService');

module.exports = {
	search,

};

function search() {
	const dataParams = {
		queryParams: {
			q: queryParams.q,
			type: queryParams.type,
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset,
			include_external: queryParams?.external,
		}
	}
	return httpGet(`/markets`)
}
