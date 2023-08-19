const express = require("express");

const { log } = require("../../middlewares/logger.middleware");
const { getSpotifyToken } = require("./auth.controller");
const router = express.Router();

router.post("/", log, getSpotifyToken);

module.exports = router;
