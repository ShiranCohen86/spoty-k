const express = require("express");
const router = express.Router();
const { log } = require("../../middlewares/logger.middleware");
const { getPlaybackState, doTransferPlayback, getAvailDevices, getCurrPlay, playOnDevice, pauseOnDevice, nextOnDevice } = require("./player.controller");

router.get("/state/:frontParams", log, getPlaybackState);
router.put("/transfer", log, doTransferPlayback);
router.get("/devices", log, getAvailDevices);
router.get("/currPlay", log, getCurrPlay);
router.put("/play", log, playOnDevice);
router.put("/pause", log, pauseOnDevice);
router.post("/next", log, nextOnDevice);

module.exports = router;

