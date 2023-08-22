const logger = require('../../services/logger.service');
const usersService = require('./users.service');

async function getMyUserDetails(req, res) {
  try {
    const accessToken = req.session.access_token
    const resMyData = await usersService.getMyUserDetails(accessToken)

    res.json(resMyData.data)

  } catch (err) {
    const errToReturn = err.response?.data || err
    logger.error("Failed to getMyUserDetails", errToReturn);
    res.status(500).send(errToReturn);
  }
}
module.exports = {
  getMyUserDetails
}