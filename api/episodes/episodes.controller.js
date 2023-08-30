const episodesService = require('./episodes.service');

module.exports = {
  getEpisodeById,
  getEpisodesByIds,
  getSavedEpisodes,
  addEpisodesByIds,
  removeEpisodesByIds,
  isEpisodesSavedByIds,
}

async function getEpisodeById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await episodesService.getEpisodeById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getEpisodeById episodes.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getEpisodesByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await episodesService.getEpisodesByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getEpisodesByIds episodes.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getSavedEpisodes(req, res) {
  try {
    const queryParams = req.query;
    const resData = await episodesService.getSavedEpisodes(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getSavedEpisodes episodes.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addEpisodesByIds(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resData = await episodesService.addEpisodesByIds({ queryParams, bodyParams })

    res.json(resData.data)
  } catch (err) {
    console.log("Function addEpisodesByIds episodes.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function removeEpisodesByIds(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resData = await episodesService.removeEpisodesByIds({ queryParams, bodyParams })

    res.json(resData.data)
  } catch (err) {
    console.log("Function removeEpisodesByIds episodes.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function isEpisodesSavedByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await episodesService.isEpisodesSavedByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function isEpisodesSavedByIds episodes.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
