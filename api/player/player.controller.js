const { log } = require('../../middlewares/logger.middleware');
const logger = require('../../services/logger.service');
const playerService = require('./player.service');

async function getPlaybackState(req, res) {
  try {
    const { market, type } = JSON.parse(req.params.frontParams);
    const accessToken = req.session.access_token
    const resPlaybackState = await playerService.getPlaybackState(accessToken, market, type)

    res.json(resPlaybackState.data)

  } catch (err) {
    logger.error("Function getPlaybackState player.controller");

    if (err?.response) {
      console.dir(err?.response?.data);
    } else {
      console.log(err);
    }

    res.status(500).send(err);
  }
}

async function doTransferPlayback(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId, isPlay } = req.body
    const resDoTransfer = await playerService.doTransferPlayback(accessToken, deviceId, isPlay)

    res.json(resDoTransfer.data)

  } catch (err) {
    logger.error("Function doTransferPlayback player.controller");

    if (err?.response) {
      console.dir(err?.response?.data);
    } else {
      console.log(err);
    }

    res.status(500).send(err);
  }
}

async function getAvailDevices(req, res) {
  try {
    const accessToken = req.session.access_token
    const resAvailDevices = await playerService.getAvailDevices(accessToken)

    res.json(resAvailDevices.data)

  } catch (err) {
    logger.error("Function getAvailDevices player.controller");

    if (err?.response) {
      console.dir(err?.response?.data);
    } else {
      console.log(err);
    }

    res.status(500).send(err);
  }
}

async function getCurrPlay(req, res) {
  try {
    const { market, type } = req.query
    const accessToken = req.session.access_token
    const resPlaybackState = await playerService.getCurrPlay(accessToken, market, type)

    res.json(resPlaybackState.data)

  } catch (err) {
    logger.error("Function getCurrPlay player.controller");

    if (err?.response) {
      console.dir(err.response?.data.error);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).send(err);
    }

  }
}

async function playOnDevice(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId, contextUri, uris, offset, positionMs } = req.body
    const resDoTransfer = await playerService.playOnDevice(accessToken, deviceId, contextUri, uris, offset, positionMs)

    res.json(resDoTransfer.data)

  } catch (err) {
    logger.error("Function playOnDevice player.controller");

    if (err?.response) {
      console.dir(err?.response?.data);
    } else {
      console.log(err);
    }

    res.status(500).send(err);
  }
}

async function pauseOnDevice(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId } = req.body
    const resDoTransfer = await playerService.pauseOnDevice(accessToken, deviceId)

    res.json(resDoTransfer.data)

  } catch (err) {
    logger.error("Function pauseOnDevice player.controller");

    if (err?.response) {
      console.dir(err?.response?.data);
    } else {
      console.log(err);
    }

    res.status(500).send(err);
  }
}
async function nextOnDevice(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId } = req.body
    const resDoTransfer = await playerService.nextOnDevice(accessToken, deviceId)

    res.json(resDoTransfer.data)

  } catch (err) {
    logger.error("Function nextOnDevice player.controller");

    if (err?.response) {
      console.dir(err?.response?.data);
      res.status(500).send(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).send(err);
    }

  }
}



module.exports = {
  getPlaybackState,
  doTransferPlayback,
  getAvailDevices,
  getCurrPlay,
  playOnDevice,
  pauseOnDevice,
  nextOnDevice
}

