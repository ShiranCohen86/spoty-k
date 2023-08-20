const logger = require('../../services/logger.service');
const playerService = require('./player.service');

async function playSong(req, res) {
  try {
    console.log('in');
    const accessToken = req.session.access_token
    const userData = await playerService.playSong(accessToken)
    console.log("userData", userData);
    res.json(userData)

  } catch (err) {
    //logger.error("Failed to getUser", err);
    res.status(500).send({ err: "Failed getUser" });
  }
}
async function getAvailDevices(req, res) {
  try {
    const accessToken = req.session.access_token
    const availDevices = await playerService.getAvailDevices(accessToken)
    res.json(availDevices.devices)

  } catch (err) {
    logger.error("Failed to getUser", err);
    res.status(500).send({ err: "Failed getUser" });
  }
}



module.exports = {
  playSong,
  getAvailDevices
}

