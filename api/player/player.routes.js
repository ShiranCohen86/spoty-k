const express = require("express");
const router = express.Router();
const { log } = require("../../middlewares/logger.middleware");
const { playSong } = require("./player.controller");
const { getAvailDevices } = require("./player.controller");

router.get("/", log, playSong);
router.get("/devices", log, getAvailDevices);

module.exports = router;
