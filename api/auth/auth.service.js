const logger = require('../../services/logger.service');
const Axios = require('axios');

require('dotenv').config()

module.exports = {
	getSpotifyToken,
};

async function getSpotifyToken(code) {
	try {
		const redirect_uri = process.env.NODE_ENV === 'production' ? process.env.REDIRECT_URI_PROD : process.env.REDIRECT_URI_DEV
		const resAxios = await Axios({
			url: 'https://accounts.spotify.com/api/token',
			method: 'post',
			params: {
				code: code,
				redirect_uri: redirect_uri,
				grant_type: 'authorization_code'
			},
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
			}
		})
		return resAxios.data
	} catch (err) {
		logger.error(`while finding user `, err);
		throw err;
	}
}






