const Axios = require('axios');
const logger = require('../../services/logger.service');

module.exports = {
	getMyUserDetails,
};

async function getMyUserDetails(accessToken) {
	try {
		return await Axios.get("https://api.spotify.com/v1/me", {
			headers: { Authorization: `Bearer ${accessToken}` }
		})
	} catch (err) {
		logger.error(`while finding user ${accessToken}`, err);
		throw err;
	}
}






