const tracksService = require('./tracks.service');

module.exports = {
  getTrackById,
  getTracksByIds,
  getSavedTracks,
  addTracksByIds,
  removeTracksByIds,
  isTracksSavedByIds,
  getAudioFeaturesByTracksIds,
  getAudioFeaturesByTrackId,
  getAudioAnalysisByTrackId,
  getRecommendationTracks
}

async function getTrackById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.getTrackById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getTrackById tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getTracksByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.getTracksByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getTracksByIds tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getSavedTracks(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.getSavedTracks(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getSavedTracks tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addTracksByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.addTracksByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function addTracksByIds tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function removeTracksByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.removeTracksByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function removeTracksByIds tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function isTracksSavedByIds(req, res) {
  console.log("HERE!!!!!!");
  try {
    const queryParams = req.query;
    const resData = await tracksService.isTracksSavedByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function isTracksSavedByIds tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getAudioFeaturesByTracksIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.getAudioFeaturesByTracksIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAudioFeaturesByTracksIds tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
async function getAudioFeaturesByTrackId(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.getAudioFeaturesByTrackId(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAudioFeaturesByTrackId tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
async function getAudioAnalysisByTrackId(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.getAudioAnalysisByTrackId(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAudioAnalysisByTrackId tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getRecommendationTracks(req, res) {
  try {
    const queryParams = req.query;
    const resData = await tracksService.getRecommendationTracks(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getRecommendationTracks tracks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

