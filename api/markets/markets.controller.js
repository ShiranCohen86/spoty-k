const marketsService = require('./markets.service');

module.exports = {
  getMarkets,
 }

async function getMarkets(req, res) {
  try {
    const resData = await marketsService.getMarkets()

    res.json(resData.data)
  } catch (err) {
    console.log("Function getMarkets markets.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

