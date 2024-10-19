const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getAlbumById,
	getAlbumsByIds,
	getTracksByAlbumId,
	getSavedAlbums,
	addAlbumsByIds,
	removeAlbumsByIds,
	isAlbumsSavedByIds,
	getNewReleases,
};

function getAlbumById(queryParams) {
	// Id Example: 4aawyAB9vmqN3uQ7FjRGTy
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
		}
	}
	return httpGet(`/albums/${queryParams.id}`, dataParams)
}

function getAlbumsByIds(queryParams) {
	console.log("queryParams", queryParams);
	// ids - comma-separated , max 20 IDs  ; IDs Examples: 382ObEPsp2rxGrnsizN5TX %2 C1A2GTWGtFfWp7KSQTwWOyo %2 C2noRn2Aes5aoNVsU6iWThc
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			ids: (queryParams.ids).join(",").toString()
		}
	}
	return httpGet(`/albums`, dataParams)
}

function getTracksByAlbumId(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/albums/${queryParams.id}/tracks`, dataParams)
}

function getSavedAlbums(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/me/albums`, dataParams)
}
//"3sW7wD2qdMjs7KncaOoIJ5" "7K6OykPbezfgKgBufihn6X" "06RK0wX4GqHcxBtHlVoGH5"
//function addAlbumsByIds({ queryParams, bodyParams }) {
// \\



function addAlbumsByIds(bodyParams) {
	const dataParams = {
		queryParams: {
			ids: (bodyParams.ids).join(",").toString(),
		},
		bodyParams: {
			ids: bodyParams?.ids
		}
	}
	return httpPut(`/me/albums`, dataParams)
}

function removeAlbumsByIds(bodyParams) {
	const dataParams = {
		queryParams: {
			ids: (bodyParams.ids).join(",").toString(),
		},
		bodyParams: {
			ids: bodyParams.ids
		}
	}
	return httpDelete(`/me/albums`, dataParams)
}

function isAlbumsSavedByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
	}
	return httpGet(`/me/albums/contains`, dataParams)
}

function getNewReleases(queryParams) {
	const dataParams = {
		queryParams: {
			country: queryParams?.country,
			limit: queryParams?.limit,
			offset: queryParams?.offset,
		},

	}
	return httpGet(`/browse/new-releases`, dataParams)
}












