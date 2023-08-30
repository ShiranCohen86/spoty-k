const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getCategoryById,
	getCategories,
};

function getCategoryById(queryParams) {
	const dataParams = {
		queryParams: {
			country: queryParams?.country,
			locale: queryParams?.locale,
		}
	}
	return httpGet(`/browse/categories/${queryParams.id}`, dataParams)
}

function getCategories(queryParams) {
	const dataParams = {
		queryParams: {
			country: queryParams?.country,
			locale: queryParams?.locale,
			limit: queryParams?.limit,
			offset: queryParams?.offset,
		}
	}
	return httpGet(`/browse/categories`, dataParams)
}






