const audiobooksService = require('./audiobooks.service');

module.exports = {
  getAudiobookById,
  getAudiobooksByIds,
  getChaptersByAudiobookId,
  getSavedAudiobooks,
  addAudiobooksByIds,
  removeAudiobooksByIds,
  isAudiobooksSavedByIds
}

async function getAudiobookById(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.getAudiobookById(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAudiobookById audiobooks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getAudiobooksByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.getAudiobooksByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getAudiobooksByIds audiobooks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getChaptersByAudiobookId(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.getChaptersByAudiobookId(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getChaptersByAudiobookId audiobooks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function getSavedAudiobooks(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.getSavedAudiobooks(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function getSavedAudiobooks audiobooks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function addAudiobooksByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.addAudiobooksByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function addAudiobooksByIds audiobooks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function removeAudiobooksByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.removeAudiobooksByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function removeAudiobooksByIds audiobooks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

async function isAudiobooksSavedByIds(req, res) {
  try {
    const queryParams = req.query;
    const resData = await audiobooksService.isAudiobooksSavedByIds(queryParams)

    res.json(resData.data)
  } catch (err) {
    console.log("Function isAudiobooksSavedByIds audiobooks.controller");

    if (err.response?.data) {
      console.dir(err.response.data);
      res.status(500).json(err.response.data.error);
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
}


