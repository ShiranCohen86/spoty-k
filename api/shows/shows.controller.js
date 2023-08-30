const showsService = require('./shows.service');

module.exports = {
  getShowById,
  getShowsByIds,
  getEpisodesByShowId,
  getSavedShows,
  addShowsByIds,
  removeShowsByIds,
  isShowsSavedByIds,
}

async function getShowById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await showsService.getShowById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getShowById shows.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getShowsByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await showsService.getShowsByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getShowsByIds shows.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getEpisodesByShowId(req, res) {
  try {
    const queryParams = req.query;
    const resData = await showsService.getEpisodesByShowId(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getEpisodesByShowId shows.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getSavedShows(req, res) {
  try {
    const queryParams = req.query;
    const resData = await showsService.getSavedShows(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getSavedShows shows.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addShowsByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await showsService.addShowsByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function addShowsByIds shows.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function removeShowsByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await showsService.removeShowsByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function removeShowsByIds shows.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function isShowsSavedByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await showsService.isShowsSavedByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function isShowsSavedByIds shows.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

