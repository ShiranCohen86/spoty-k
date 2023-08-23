const logger = require('./logger.service');
const Axios = require('axios');

async function makeSpotifyRequest(url, method, accessToken, params = {}) {
    try {
        return await Axios({
            url, method, params,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
    } catch (err) {
        //logger.error("Do Http Request", err.response?.data); 
        throw err
    }
}

module.exports = {
    makeSpotifyRequest
}




