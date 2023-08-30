const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getChapterById,
	getChaptersByIds,
};

function getChapterById(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
		}
	}
	return httpGet(`/chapters/${id}`, dataParams)
}

function getChaptersByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
			market: queryParams?.market,
		}
	}
	return httpGet(`/chapters`, dataParams)
}






