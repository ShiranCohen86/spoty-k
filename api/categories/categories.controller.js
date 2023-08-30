const categoriesService = require('./categories.service');

module.exports = {
  getCategoryById,
  getCategories,
 
}

async function getCategoryById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.getCategoryById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getCategoryById categories.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getCategories(req, res) {
  try {
    const queryParams = req.query;
    const resData = await categoriesService.getCategories(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getCategories categories.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

