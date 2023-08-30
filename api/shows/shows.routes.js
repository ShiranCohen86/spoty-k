const express = require("express");
const router = express.Router();

const {
    getShowById,
    getShowsByIds,
    getEpisodesByShowId,
    getSavedShows,
    addShowsByIds,
    removeShowsByIds,
    isShowsSavedByIds,
} = require("./shows.controller");

router.get("/id", getShowById);
router.get("/ids", getShowsByIds);
router.get("/episodes", getEpisodesByShowId);
router.get("/saved", getSavedShows);
router.put("/add", addShowsByIds);
router.delete("/remove", removeShowsByIds);
router.get("/is-saved", isShowsSavedByIds);

module.exports = router;
