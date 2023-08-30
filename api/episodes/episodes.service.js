const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getEpisodeById,
	getEpisodesByIds,
	getSavedEpisodes,
	addEpisodesByIds,
	removeEpisodesByIds,
	isEpisodesSavedByIds,
};

function getEpisodeById(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
		}
	}
	return httpGet(`/episodes/${queryParams.id}`, dataParams)
}

function getEpisodesByIds(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			ids: queryParams.ids
		}
	}
	return httpGet(`/episodes`, dataParams)
}

function getSavedEpisodes(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/me/episodes`, dataParams)
}

function addEpisodesByIds({ queryParams, bodyParams }) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
		bodyParams: {
			ids: bodyParams?.ids
		}
	}
	return httpPut(`/me/episodes`, dataParams)
}

function removeEpisodesByIds({ queryParams, bodyParams }) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
		bodyParams: {
			ids: bodyParams.ids
		}
	}
	return httpDelete(`/me/episodes`, dataParams)
}

function isEpisodesSavedByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
	}
	return httpGet(`/me/episodes/contains`, dataParams)
}











