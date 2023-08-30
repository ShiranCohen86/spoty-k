const Axios = require('axios');
const logger = require('../../services/logger.service');
const { makeSpotifyRequest } = require('../../services/spotify.service');
const { httpGet, httpPut, httpPost, httpDelete } = require('../../services/httpService');


module.exports = {
	getMyDetails,
	getMyTopItems,
	getUserProfile,
	followPlaylistById,
	unFollowPlaylistById,
	getFollowedArtists,
	followUsersByIds,
	unFollowUsersByIds,
	isMeFollowsUsers,
	isMeFollowsPlaylist

};

function getMyDetails() {
	return httpGet("/me")
}

function getMyTopItems(queryParams) {
	const dataParams = {
		queryParams: {
			time_range: queryParams?.timeRange,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/me/top/${queryParams.type}`, dataParams)
}

function getUserProfile(queryParams) {
	return httpGet(`/users/${queryParams.userId}`)
}

function followPlaylistById({ queryParams, bodyParams }) {
	const dataParams = {
		bodyParams: {
			public: bodyParams?.isPublic
		}
	}
	return httpPut(`/playlists/${queryParams.playlistId}/followers`, dataParams)
}

function unFollowPlaylistById(queryParams) {
	return httpDelete(`/playlists/${queryParams.playlistId}/followers`)
}

function getFollowedArtists(queryParams) {
	const dataParams = {
		queryParams: {
			type: "artist",
			after: queryParams?.after,
			limit: queryParams?.limit
		}
	}
	return httpGet(`/me/following`, dataParams)
}

function followUsersByIds({ queryParams, bodyParams }) {
	const dataParams = {
		queryParams: {
			type: queryParams.type,
			ids: queryParams.ids,
		},
		bodyParams: {
			ids: bodyParams?.ids

		}
	}
	return httpPut(`/me/following`, dataParams)
}

function unFollowUsersByIds({ queryParams, bodyParams }) {
	const dataParams = {
		queryParams: {
			type: queryParams.type,
			ids: queryParams.ids,
		},
		bodyParams: {
			ids: bodyParams?.ids

		}
	}
	return httpDelete(`/me/following`, dataParams)
}

function isMeFollowsUsers(queryParams) {
	const dataParams = {
		queryParams: {
			type: queryParams.type,
			ids: queryParams.ids,
		}
	}
	return httpGet(`/me/following/contains`, dataParams)
}

function isMeFollowsPlaylist(queryParams) {
	const dataParams = {
		queryParams: {
			//playlist_id: queryParams.playlistId,
			ids: queryParams.ids,
		}
	}
	return httpGet(`/playlists/${queryParams.playlistId}/followers/contains`, dataParams)
}