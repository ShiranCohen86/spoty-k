const genresService = require('./genres.service');

module.exports = {
  getGenres,
 }

async function getGenres(req, res) {
  try {
    const resData = await genresService.getGenres()

    res.json(resData.data)
  } catch (err) {
    console.log("Function getGenres genres.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

