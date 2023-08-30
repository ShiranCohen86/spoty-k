const playerService = require('./player.service');

module.exports = {
  getPlaybackState,
  transferPlayback,
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
    const resData = await playerService.getPlaybackState(queryParams)

    res.json(resData.data)
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

async function transferPlayback(req, res) {
  try {
    const bodyParams = req.body
    const resData = await playerService.transferPlayback(bodyParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function transferPlayback player.controller");

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
    const resData = await playerService.getAvailDevices()

    res.json(resData.data)
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
    const resData = await playerService.getCurrPlay(queryParams)

    res.json(resData.data)
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
    const bodyParams = req.body;
    const queryParams = req.query;
    const isPlay = await playerService.play({ bodyParams, queryParams })

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
    const queryParams = req.query
    const isPause = await playerService.pause(queryParams)

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
    const queryParams = req.query
    const isNext = await playerService.next(queryParams)

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
    const queryParams = req.query
    const isPrevious = await playerService.previous(queryParams)

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
    const queryParams = req.query
    const iSeekToPosition = await playerService.seekToPosition(queryParams)

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
    const queryParams = req.query
    const isRepeatMode = await playerService.setRepeatMode(queryParams)

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
    const queryParams = req.query
    const isSetVolume = await playerService.setVolume(queryParams)

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
    const queryParams = req.query
    const isShuffle = await playerService.toggleShuffle(queryParams)

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
    const resData = await playerService.getRecentlyPlayed(queryParams)

    res.json(resData.data)
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
    const resData = await playerService.getQueue()

    res.json(resData.data)
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
    const queryParams = req.query
    const isAddToQueue = await playerService.addToQueue(queryParams)

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