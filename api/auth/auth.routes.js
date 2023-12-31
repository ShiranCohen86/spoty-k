const express = require("express");
const router = express.Router();

const { getSpotifyToken } = require("./auth.controller");

router.post("/", getSpotifyToken);

module.exports = router;
