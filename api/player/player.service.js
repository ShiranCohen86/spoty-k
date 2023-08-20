const Axios = require('axios');
const logger = require('../../services/logger.service');

module.exports = {
	playSong,
	getAvailDevices
};

async function playSong(accessToken) {
	try {

		const test = await Axios({
			url: "https://api.spotify.com/v1/me/player/play?device_id:d56778359711b017aa6af352d593209b4e111b57",
			method: 'PUT',
			params: {

				uri: 'spotify:track:08bNPGLD8AhKpnnERrAc6G'
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`
			}
		})
		console.log("test", test);
		return { "test": "test" }
		//return await Axios.put("https://api.spotify.com/v1/me/player/play", { params: { context_uri: "spotify:album:1Je1IMUlBXcx1Fz0WE7oPT" } }, {

		//	headers: { Authorization: `Bearer ${accessToken}` }
		//})
	} catch (err) {
		logger.error(`while playing song`, err);
		throw err;
	}
}

async function getAvailDevices(accessToken) {
	try {
		const test = await Axios({
			url: "https://api.spotify.com/v1/me/player",
			method: 'get',
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})
		console.dir(test);
		return test
		//return await Axios.put("https://api.spotify.com/v1/me/player/play", { params: { context_uri: "spotify:album:1Je1IMUlBXcx1Fz0WE7oPT" } }, {

		//	headers: { Authorization: `Bearer ${accessToken}` }
		//})
	} catch (err) {
		logger.error(`availDevices ${accessToken}`, err);
		throw err;
	}
}






