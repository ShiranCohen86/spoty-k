const albumsService = require('./albums.service');

module.exports = {
  getAlbumById,
  getAlbumsByIds,
  getTracksByAlbumId,
  getSavedAlbums,
  addAlbumsByIds,
  removeAlbumsByIds,
  isAlbumsSavedByIds,
  getNewReleases
}

async function getAlbumById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await albumsService.getAlbumById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAlbumById albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getAlbumsByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await albumsService.getAlbumsByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAlbumsByIds albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getTracksByAlbumId(req, res) {
  try {
    const queryParams = req.query;
    const resData = await albumsService.getTracksByAlbumId(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getTracksByAlbumId albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getSavedAlbums(req, res) {
  try {
    const queryParams = req.query;
    const resData = await albumsService.getSavedAlbums(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getSavedAlbums albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addAlbumsByIds(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resData = await albumsService.addAlbumsByIds({ queryParams, bodyParams })

    res.json(resData.data)
  } catch (err) {
    console.log("Function addAlbumsByIds albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function removeAlbumsByIds(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resData = await albumsService.removeAlbumsByIds({ queryParams, bodyParams })

    res.json(resData.data)
  } catch (err) {
    console.log("Function removeAlbumsByIds albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function isAlbumsSavedByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await albumsService.isAlbumsSavedByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function isAlbumsSavedByIds albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getNewReleases(req, res) {
  try {
    const queryParams = req.query;
    const resData = await albumsService.getNewReleases(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getNewReleases albums.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
