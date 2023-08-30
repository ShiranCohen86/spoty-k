const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getAudiobookById,
	getAudiobooksByIds,
	getChaptersByAudiobookId,
	getSavedAudiobooks,
	addAudiobooksByIds,
	removeAudiobooksByIds,
	isAudiobooksSavedByIds

};

function getAudiobookById(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
		}
	}
	return httpGet(`/audiobooks/${queryParams.id}`, dataParams)
}

function getAudiobooksByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
			market: queryParams?.market,
		}
	}
	return httpGet(`/audiobooks`, dataParams)
}

function getChaptersByAudiobookId(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`audiobooks/${queryParams.id}/chapters`, dataParams)
}

function getSavedAudiobooks(queryParams) {
	const dataParams = {
		queryParams: {
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/me/audiobooks`, dataParams)
}

function addAudiobooksByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
	}
	return httpPut(`/me/audiobooks`, dataParams)
}

function removeAudiobooksByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
	}
	return httpDelete(`/me/audiobooks`, dataParams)
}

function isAudiobooksSavedByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
	}
	return httpGet(`/me/audiobooks/contains`, dataParams)
}






