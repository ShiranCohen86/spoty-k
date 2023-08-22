const Axios = require('axios');
const logger = require('../../services/logger.service');
const { makeSpotifyRequest } = require('../../services/spotify.service');

module.exports = {
	getMyUserDetails,
};

function getMyUserDetails(accessToken) {
	try {
		const url = "https://api.spotify.com/v1/me"
		const method = "get"

		return makeSpotifyRequest(url, method, accessToken)

	} catch (err) {
		logger.error("Function getMyUserDetails users.service", (err.response?.data || err));
		throw err;
	}
}