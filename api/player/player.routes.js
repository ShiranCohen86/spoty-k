const express = require("express");
const router = express.Router();
const { log } = require("../../middlewares/logger.middleware");
const {
    getPlaybackState,
    doTransferPlayback,
    getAvailDevices,
    getCurrPlay,
    play,
    pause,
    next,
    previous,
    seekToPosition,
    setRepeatMode,
    setVolume,
    toggleShuffle,
    getRecentlyPlayed,
    getQueue,
    addToQueue
} = require("./player.controller");

router.get("/state", log, getPlaybackState);
router.put("/transfer", log, doTransferPlayback);
router.get("/devices", log, getAvailDevices);
router.get("/curr-play", log, getCurrPlay);
router.put("/play", log, play);
router.put("/pause", log, pause);
router.post("/next", log, next);
router.post("/previous", log, previous);
router.put("/seek", log, seekToPosition);
router.put("/repeat", log, setRepeatMode);
router.put("/volume", log, setVolume);
router.put("/shuffle", log, toggleShuffle);
router.get("/recently-played", log, getRecentlyPlayed);
router.get("/queue", log, getQueue);
router.post("/queue", log, addToQueue);


module.exports = router;

