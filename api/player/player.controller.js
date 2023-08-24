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
    const queryParams = req.query;
    const resPlaybackState = await playerService.getPlaybackState(queryParams)

    res.json(resPlaybackState.data)
  } catch (err) {
    console.log("Function getPlaybackState player.controller");

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
    const bodyParams = req.body
    const resDoTransfer = await playerService.doTransferPlayback(bodyParams)

    res.json(resDoTransfer.data)
  } catch (err) {
    console.log("Function doTransferPlayback player.controller");

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
    const resAvailDevices = await playerService.getAvailDevices()

    res.json(resAvailDevices.data)
  } catch (err) {
    console.log("Function getAvailDevices player.controller");

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
    const queryParams = req.query
    const resCurrPlay = await playerService.getCurrPlay(queryParams)

    res.json(resCurrPlay.data)
  } catch (err) {
    console.log("Function getCurrPlay player.controller");

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
    const queryBody = req.body;
    const isPlay = await playerService.play(queryBody)

    res.json(true)
  } catch (err) {
    console.log("Function playOnDevice player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function pause(req, res) {
  try {
    const queryBody = req.body
    const isPause = await playerService.pause(queryBody)

    res.send(true)
  } catch (err) {
    console.log("Function pauseOnDevice player.controller");

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
    const queryBody = req.body
    const isNext = await playerService.next(queryBody)

    res.send(true)
  } catch (err) {
    console.log("Function nextOnDevice player.controller");

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
    const queryBody = req.body
    const isPrevious = await playerService.previous(queryBody)

    res.send(true)
  } catch (err) {
    console.log("Function previousOnDevice player.controller");

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
    const queryBody = req.body
    const iSeekToPosition = await playerService.seekToPosition(queryBody)

    res.send(true)
  } catch (err) {
    console.log("Function seekToPosition player.controller");

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
    const queryBody = req.body
    const isRepeatMode = await playerService.setRepeatMode(queryBody)

    res.send(true)
  } catch (err) {
    console.log("Function setRepeatMode player.controller");

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
    const queryBody = req.body
    const isSetVolume = await playerService.setVolume(queryBody)

    res.send(true)
  } catch (err) {
    console.log("Function setVolume player.controller");

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
    const queryBody = req.body
    const isShuffle = await playerService.toggleShuffle(queryBody)

    res.send(true)
  } catch (err) {
    console.log("Function toggleShuffle player.controller");

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
    const queryParams = req.query
    const resDoTransfer = await playerService.getRecentlyPlayed(queryParams)

    res.json(resDoTransfer.data)
  } catch (err) {
    console.log("Function getRecentlyPlayed player.controller");

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
    const resAvailDevices = await playerService.getQueue()

    res.json(resAvailDevices.data)
  } catch (err) {
    console.log("Function getQueue player.controller");

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
    const bodyParams = req.body
    const isAddToQueue = await playerService.addToQueue(bodyParams)

    res.send(true)
  } catch (err) {
    console.log("Function addToQueue player.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}