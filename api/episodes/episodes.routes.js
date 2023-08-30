const express = require("express");
const router = express.Router();

const {
    getEpisodeById,
    getEpisodesByIds,
    getSavedEpisodes,
    addEpisodesByIds,
    removeEpisodesByIds,
    isEpisodesSavedByIds,
} = require("./episodes.controller");

router.get("/id", getEpisodeById);
router.get("/ids", getEpisodesByIds);
router.get("/saved", getSavedEpisodes);
router.put("/add", addEpisodesByIds);
router.delete("/remove", removeEpisodesByIds);
router.get("/is-saved", isEpisodesSavedByIds);

module.exports = router;
