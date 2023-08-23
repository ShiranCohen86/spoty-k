const logger = require('../../services/logger.service');
const playerService = require('./player.service');

module.exports = {
  getPlaybackState,
  doTransferPlayback,
  getAvailDevices,
  getCurrPlay,
  play,
  pause,
  next,
  previous,
  seekToPosition,
  setRepeatMode,
  setVolume,
  toggleShuffle,
  getRecentlyPlayed,
  getQueue,
  addToQueue
}

async function getPlaybackState(req, res) {
  try {

    const { market, type } = req.query;
    const accessToken = req.session.access_token
    const resPlaybackState = await playerService.getPlaybackState(accessToken, market, type)

    res.json(resPlaybackState.data)

  } catch (err) {
    logger.error("Function getPlaybackState player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function doTransferPlayback(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId, isPlay = false } = req.body
    const resDoTransfer = await playerService.doTransferPlayback(accessToken, deviceId, isPlay)

    res.json(resDoTransfer.data)

  } catch (err) {
    logger.error("Function doTransferPlayback player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function getAvailDevices(req, res) {
  try {
    const accessToken = req.session.access_token
    const resAvailDevices = await playerService.getAvailDevices(accessToken)

    res.json(resAvailDevices.data)

  } catch (err) {
    logger.error("Function getAvailDevices player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getCurrPlay(req, res) {
  try {
    const { market, type } = req.query
    const accessToken = req.session.access_token
    const resCurrPlay = await playerService.getCurrPlay(accessToken, market, type)

    res.json(resCurrPlay.data)

  } catch (err) {
    logger.error("Function getCurrPlay player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function play(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId, contextUri, uris, offset, positionMs } = req.body
    const isPlay = await playerService.play(accessToken, deviceId, contextUri, uris, offset, positionMs)

    res.json(true)

  } catch (err) {
    logger.error("Function playOnDevice player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

    res.status(500).send(err);
  }
}

async function pause(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId } = req.body
    const isPause = await playerService.pause(accessToken, deviceId)

    res.send(true)

  } catch (err) {
    logger.error("Function pauseOnDevice player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function next(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId } = req.body
    const isNext = await playerService.next(accessToken, deviceId)

    res.send(true)

  } catch (err) {
    logger.error("Function nextOnDevice player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function previous(req, res) {
  try {
    const accessToken = req.session.access_token
    const { deviceId } = req.body
    const isPrevious = await playerService.previous(accessToken, deviceId)

    res.send(true)

  } catch (err) {
    logger.error("Function previousOnDevice player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function seekToPosition(req, res) {
  try {
    const accessToken = req.session.access_token
    const { positionMs, deviceId } = req.body
    const iSeekToPosition = await playerService.seekToPosition(accessToken, deviceId, positionMs)

    res.send(true)

  } catch (err) {
    logger.error("Function seekToPosition player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function setRepeatMode(req, res) {
  try {
    const accessToken = req.session.access_token
    const { state, deviceId } = req.body
    const isRepeatMode = await playerService.setRepeatMode(accessToken, deviceId, state)

    res.send(true)

  } catch (err) {
    logger.error("Function setRepeatMode player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function setVolume(req, res) {
  try {
    const accessToken = req.session.access_token
    const { volumePercent, deviceId } = req.body
    const isSetVolume = await playerService.setVolume(accessToken, deviceId, volumePercent)

    res.send(true)

  } catch (err) {
    logger.error("Function setVolume player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function toggleShuffle(req, res) {
  try {
    const accessToken = req.session.access_token
    const { state, deviceId } = req.body
    const isShuffle = await playerService.toggleShuffle(accessToken, deviceId, state)

    res.send(true)

  } catch (err) {
    logger.error("Function toggleShuffle player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function getRecentlyPlayed(req, res) {
  try {
    const accessToken = req.session.access_token
    const { limit, after, before } = req.query
    const resDoTransfer = await playerService.getRecentlyPlayed(accessToken, limit, after, before)

    res.json(resDoTransfer.data)

  } catch (err) {
    logger.error("Function getRecentlyPlayed player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}

async function getQueue(req, res) {
  try {
    const accessToken = req.session.access_token
    const resAvailDevices = await playerService.getQueue(accessToken)

    res.json(resAvailDevices.data)

  } catch (err) {
    logger.error("Function getQueue player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addToQueue(req, res) {
  try {
    const accessToken = req.session.access_token
    const { uri, deviceId } = req.body
    const isAddToQueue = await playerService.addToQueue(accessToken, deviceId, uri)

    res.send(true)

  } catch (err) {
    logger.error("Function addToQueue player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }

  }
}