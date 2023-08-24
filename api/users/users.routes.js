const express = require("express");
const router = express.Router();

const { getMyDetails, getMyTopByArtists, getMyTopByTracks } = require("./users.controller");

router.get("/me", getMyDetails);
router.get("/top-artists", getMyTopByArtists);
router.get("/top-tracks", getMyTopByTracks);

module.exports = router;
