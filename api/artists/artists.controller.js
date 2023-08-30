const artistsService = require('./artists.service');

module.exports = {
  getArtistById,
  getArtistsByIds,
  getAlbumsByArtistId,
  getTopTracksByArtistId,
  getRelatedArtists
}

async function getArtistById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await artistsService.getArtistById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getArtistById artists.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getArtistsByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await artistsService.getArtistsByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getArtistsByIds artists.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getAlbumsByArtistId(req, res) {
  try {
    const queryParams = req.query;
    const resData = await artistsService.getAlbumsByArtistId(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAlbumsByArtistId artists.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getTopTracksByArtistId(req, res) {
  try {
    const queryParams = req.query;
    const resData = await artistsService.getTopTracksByArtistId(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getTopTracksByArtistId artists.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getRelatedArtists(req, res) {
  try {
    const queryParams = req.query;
    const resData = await artistsService.getRelatedArtists(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getRelatedArtists artists.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}





