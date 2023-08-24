const usersService = require('./users.service');

module.exports = {
  getMyDetails,
  getMyTopByArtists,
  getMyTopByTracks
}

async function getMyDetails(req, res) {
  try {
    const accessToken = req.session.access_token
    const resMyData = await usersService.getMyDetails(accessToken)

    res.json(resMyData.data)
  } catch (err) {
    console.log("Function getMyDetails users.controller");
    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getMyTopByArtists(req, res) {
  try {
    const accessToken = req.session.access_token
    const resMyData = await usersService.getMyTopByArtists(accessToken)

    res.json(resMyData.data)
  } catch (err) {
    console.log("Function getMyTopByArtists users.controller");
    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
async function getMyTopByTracks(req, res) {
  try {
    const accessToken = req.session.access_token
    const resMyData = await usersService.getMyTopByTracks(accessToken)

    res.json(resMyData.data)
  } catch (err) {
    console.log("Function getMyTopByTracks users.controller");
    if (err.response) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

