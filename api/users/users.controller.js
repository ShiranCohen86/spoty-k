const logger = require('../../services/logger.service');
const usersService = require('./users.service');

async function getMyUserDetails(req, res) {
  try {
    const accessToken = req.session.access_token
    const userData = await usersService.getMyUserDetails(accessToken)

    res.json(userData.data)

  } catch (err) {
    logger.error("Failed to getUser", err);
    res.status(500).send({ err: "Failed getUser" });
  }
}
module.exports = {
  getMyUserDetails
}

