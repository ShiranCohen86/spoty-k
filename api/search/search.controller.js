const searchService = require('./search.service');

module.exports = {
  search,
 }

async function search(req, res) {
  try {
    const resData = await searchService.search()

    res.json(resData.data)
  } catch (err) {
    console.log("Function search search.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

