const authService = require('./auth.service');
const logger = require("../../services/logger.service");

async function getSpotifyToken(req, res) {
  try {
    if (!req.session.access_token) {
      const code = req.body.code

      const resAxios = await authService.getSpotifyToken(code)

      req.session.access_token = resAxios.access_token
      req.session.token_type = resAxios.token_type
      req.session.expires_in = resAxios.expires_in
      req.session.refresh_token = resAxios.refresh_token
      req.session.isLoggedIn = true
      res.status(200).send(true)
    }

  } catch (err) {
    logger.error("Failed to getCallback", err.response?.data);
    res.status(500).send(err.response?.data);
  }
}

module.exports = {
  getSpotifyToken
};

