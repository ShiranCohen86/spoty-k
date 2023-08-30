const playlistService = require('./playlists.service');

module.exports = {
  getPlaylistById,
  editPlaylistDetailsById,
  getTrackByPlaylistId,
  editTracksByPlaylistId,
  addItemsToPlaylist,
  removeItemsToPlaylist,
  getPlaylists,
  getPlaylistsByUserId,
  createPlaylist,
  getFeaturedPlaylists,
  getPlaylistByCategoryId,
  getCoverImgByPlaylistId,
  addPlaylistCoverImg
}

async function getPlaylistById(req, res) {
  try {
    const queryParams = req.query;
    const resPlaylist = await playlistService.getPlaylistById(queryParams)

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function getPlaylistById playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function editPlaylistDetailsById(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resPlaylist = await playlistService.editPlaylistDetailsById({ queryParams, bodyParams })

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function editPlaylistDetailsById playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getTrackByPlaylistId(req, res) {
  try {
    const queryParams = req.query;
    const resPlaylist = await playlistService.getTrackByPlaylistId(queryParams)

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function getTrackByPlaylistId playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function editTracksByPlaylistId(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;

    const resPlaylist = await playlistService.editTracksByPlaylistId({ queryParams, bodyParams })

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function editTracksByPlaylistId playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addItemsToPlaylist(req, res) {
  try {
    const queryParams = req.query
    const bodyParams = req.body
    const isAddToQueue = await playlistService.addItemsToPlaylist({ queryParams, bodyParams })

    res.send(true)
  } catch (err) {
    console.log("Function addItemsToPlaylist playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function removeItemsToPlaylist(req, res) {
  try {
    const queryParams = req.query
    const bodyParams = req.body
    const isAddToQueue = await playlistService.removeItemsToPlaylist({ queryParams, bodyParams })

    res.send(true)
  } catch (err) {
    console.log("Function removeItemsToPlaylist playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getPlaylists(req, res) {
  try {
    const queryParams = req.query;
    const resPlaylist = await playlistService.getPlaylists(queryParams)

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function getPlaylists playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getPlaylistsByUserId(req, res) {
  try {
    const queryParams = req.query;
    const resPlaylist = await playlistService.getPlaylistsByUserId(queryParams)

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function getPlaylistsByUserId playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function createPlaylist(req, res) {
  try {
    const queryParams = req.query
    const bodyParams = req.body
    const isAddToQueue = await playlistService.createPlaylist({ queryParams, bodyParams })

    res.send(true)
  } catch (err) {
    console.log("Function createPlaylist playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getFeaturedPlaylists(req, res) {
  try {
    const queryParams = req.query;
    const resPlaylist = await playlistService.getFeaturedPlaylists(queryParams)

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function getFeaturedPlaylists playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getPlaylistByCategoryId(req, res) {
  try {
    const queryParams = req.query;
    const resPlaylist = await playlistService.getPlaylistByCategoryId(queryParams)

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function getPlaylistByCategoryId playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function  getCoverImgByPlaylistId(req, res) {
  try {
    const queryParams = req.query;
    const resPlaylist = await playlistService. getCoverImgByPlaylistId(queryParams)

    res.json(resPlaylist.data)
  } catch (err) {
    console.log("Function  getCoverImgByPlaylistId playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addPlaylistCoverImg(req, res) {
  try {
    const queryParams = req.query
    const bodyParams = req.body
    const isAddToQueue = await playlistService.addPlaylistCoverImg({ queryParams, bodyParams })

    res.send(true)
  } catch (err) {
    console.log("Function addPlaylistCoverImg playlist.controller");

    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

