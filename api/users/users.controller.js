const usersService = require('./users.service');

module.exports = {
  getMyDetails,
  getMyTopItems,
  getUserProfile,
  followPlaylistById,
  unFollowPlaylistById,
  getFollowedArtists,
  followUsersByIds,
  unFollowUsersByIds,
  isMeFollowsUsers,
  isMeFollowsPlaylist
}

async function getMyDetails(req, res) {
  try {
    const resData = await usersService.getMyDetails()

    res.json(resData.data)
  } catch (err) {
    console.log("Function getMyDetails users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getMyTopItems(req, res) {
  try {
    const queryParams = req.query;
    const resData = await usersService.getMyTopItems(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getMyTopItems users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getUserProfile(req, res) {
  try {
    const queryParams = req.query;
    const resData = await usersService.getUserProfile(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getMyTopItems users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function followPlaylistById(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resData = await usersService.followPlaylistById({ queryParams, bodyParams })

    res.json(resData.data)
  } catch (err) {
    console.log("Function followPlaylistById users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function unFollowPlaylistById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await usersService.unFollowPlaylistById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function unFollowPlaylistById users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getFollowedArtists(req, res) {
  try {
    const queryParams = req.query;
    const resData = await usersService.getFollowedArtists(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getFollowedArtists users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function followUsersByIds(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resData = await usersService.followUsersByIds({ queryParams, bodyParams })

    res.json(resData.data)
  } catch (err) {
    console.log("Function followUsersByIds users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function unFollowUsersByIds(req, res) {
  try {
    const queryParams = req.query;
    const bodyParams = req.body;
    const resData = await usersService.unFollowUsersByIds({ queryParams, bodyParams })
    
    res.json(resData.data)
  } catch (err) {
    console.log("Function unFollowUsersByIds users.controller");
    
    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function isMeFollowsUsers(req, res) {
  try {
    const queryParams = req.query;
    const resData = await usersService.isMeFollowsUsers(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function isMeFollowsUsers users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function isMeFollowsPlaylist(req, res) {
  try {
    const queryParams = req.query;
    const resData = await usersService.isMeFollowsPlaylist(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function isMeFollowsPlaylist users.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
