
const { httpGet, httpPut, httpPost, httpDelete } = require('../../services/httpService');

module.exports = {
	getPlaylistById,
	editPlaylistDetailsById,
	getTrackByPlaylistId,
	editTracksByPlaylistId,
	addItemsToPlaylist,
	removeItemsToPlaylist,
	getPlaylists,
	getPlaylistsByUserId,
	createPlaylist,
	getFeaturedPlaylists,
	getPlaylistByCategoryId,
	getCoverImgByPlaylistId,
	addPlaylistCoverImg
};

function getPlaylistById(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			fields: queryParams?.fields,
			additional_types: queryParams?.types
		}
	}
	return httpGet(`/playlists/${queryParams.playlistId}`, dataParams)
}

function editPlaylistDetailsById({ queryParams, bodyParams }) {
	const dataParams = {
		bodyParams: {
			name: bodyParams?.name,
			public: bodyParams?.public,
			collaborative: bodyParams?.isCollaborative,
			description: bodyParams?.description
		}
	}
	return httpPut(`/playlists/${queryParams.playlistId}`, dataParams)
}

function getTrackByPlaylistId(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			fields: queryParams?.fields,
			additional_types: queryParams?.types,
			limit: queryParams?.limit,
			offset: queryParams?.offset,
		}
	}
	return httpGet(`/playlists/${queryParams.playlistId}/tracks`, dataParams)
}

function editTracksByPlaylistId({ queryParams, bodyParams }) {
	const dataParams = {
		queryParams: {
			uris: queryParams?.uris
		},
		bodyParams: {
			uris: queryParams?.uris,
			range_start: bodyParams?.rangeStart,
			insert_before: bodyParams?.insertBefore,
			range_length: bodyParams?.rangeLength,
			snapshot_id: bodyParams?.snapshotId,
		}
	}
	return httpPut(`/playlists/${queryParams.playlistId}/tracks`, dataParams)
}

function addItemsToPlaylist({ queryParams, bodyParams }) {
	const dataParams = {
		queryParams: {
			uris: queryParams?.uris,
			position: queryParams?.position,
		},
		bodyParams: {
			uris: bodyParams.uris,
			position: bodyParams?.position,
		}
	}
	return httpPost(`/playlists/${queryParams.playlistId}/tracks`, dataParams)
}

function removeItemsToPlaylist({ queryParams, bodyParams }) {
	const formattedTracks = bodyParams.uris.map((uri) => {
		return { uri }
	})
	const dataParams = {
		bodyParams: {
			tracks: {
				formattedTracks
			},
			uris: bodyParams.uris,
			snapshot_id: bodyParams?.snapshotId,
		}
	}
	return httpDelete(`/playlists/${queryParams.playlistId}/tracks`, dataParams)
}

function getPlaylists(queryParams) {
	const dataParams = {
		queryParams: {
			limit: queryParams?.limit,
			offset: queryParams?.offset,
		}
	}
	return httpGet(`/me/playlists`, dataParams)
}

function getPlaylistsByUserId(queryParams) {
	const dataParams = {
		queryParams: {
			limit: queryParams?.limit,
			offset: queryParams?.offset,
		}
	}
	return httpGet(`/users/${queryParams.userId}/playlists`, dataParams)
}

function createPlaylist({ queryParams, bodyParams }) {
	const dataParams = {
		bodyParams: {
			name: bodyParams.name,
			public: bodyParams?.isPublic,
			collaborative: bodyParams?.isCollaborative,
			description: bodyParams?.description,
		}
	}
	return httpPost(`/users/${queryParams.userId}/playlists`, dataParams)
}

function getFeaturedPlaylists(queryParams) {
	const dataParams = {
		queryParams: {
			country: queryParams?.country,
			locale: queryParams?.locale,
			timestamp: queryParams?.timestamp,
			limit: queryParams?.limit,
			offset: queryParams?.offset,
		}
	}
	return httpGet(`/browse/featured-playlists`, dataParams)
}

function getPlaylistByCategoryId(queryParams) {
	const dataParams = {
		queryParams: {
			country: queryParams?.country,
			limit: queryParams?.limit,
			offset: queryParams?.offset,
		}
	}
	return httpGet(`/categories/${queryParams.categoryId}/playlists`, dataParams)
}

function getCoverImgByPlaylistId(queryParams) {
	return httpGet(`/playlists/${queryParams.playlistId}/images`, dataParams)
}

function addPlaylistCoverImg({ queryParams, bodyParams }) {
	const dataParams = {
		bodyParams: bodyParams.coverImgBase64
	}
	return httpPost(`/playlists/${queryParams.playlistId}/images`, dataParams)
}



