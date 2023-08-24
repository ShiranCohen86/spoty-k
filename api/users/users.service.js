const Axios = require('axios');
const logger = require('../../services/logger.service');
const { makeSpotifyRequest } = require('../../services/spotify.service');

module.exports = {
	getMyDetails,
	getMyTopByArtists,
	getMyTopByTracks

};

function getMyDetails(accessToken) {
	const url = "https://api.spotify.com/v1/me"
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function getMyTopByArtists(accessToken) {
	const url = "https://api.spotify.com/v1/me/top/artists"
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}
function getMyTopByTracks(accessToken) {
	const url = "https://api.spotify.com/v1/me/top/tracks"
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}