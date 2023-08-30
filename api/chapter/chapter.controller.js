const categoriesService = require('./chapter.service');

module.exports = {
  getChapterById,
  getChaptersByIds,
 
}

async function getChapterById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.getChapterById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getChapterById categories.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getChaptersByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await categoriesService.getChaptersByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getChaptersByIds categories.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

