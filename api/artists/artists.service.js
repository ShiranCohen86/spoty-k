const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getArtistById,
	getArtistsByIds,
	getAlbumsByArtistId,
	getTopTracksByArtistId,
	getRelatedArtists
};

function getArtistById(queryParams) {
	return httpGet(`/artists/${queryParams.id}`)
}

function getArtistsByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids
		}
	}
	return httpGet(`/artists`, dataParams)
}

function getAlbumsByArtistId(queryParams) {
	const dataParams = {
		queryParams: {
			include_groups: queryParams?.groups,
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`artists/${queryParams.id}/albums`, dataParams)
}

function getTopTracksByArtistId(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
		}
	}
	return httpGet(`/artists/${queryParams.id}/top-tracks`, dataParams)
}

function getRelatedArtists(queryParams) {
	return httpGet(`/artists/${queryParams.id}/related-artists`)
}









