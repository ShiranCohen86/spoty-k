const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getShowById,
	getShowsByIds,
	getEpisodesByShowId,
	getSavedShows,
	addShowsByIds,
	removeShowsByIds,
	isShowsSavedByIds,
};

function getShowById(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
		}
	}
	return httpGet(`/shows/${queryParams.showId}`, dataParams)
}

function getShowsByIds(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			ids: queryParams.ids
		}
	}
	return httpGet(`/shows`, dataParams)
}

function getEpisodesByShowId(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/shows/${queryParams.id}/episodes`, dataParams)
}

function getSavedShows(queryParams) {
	const dataParams = {
		queryParams: {
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/me/shows`, dataParams)
}

function addShowsByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},

	}
	return httpPut(`/me/shows`, dataParams)
}

function removeShowsByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
			market: queryParams?.market
		},

	}
	return httpDelete(`/me/shows`, dataParams)
}

function isShowsSavedByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},

	}
	return httpGet(`/me/shows/contains`, dataParams)
}













