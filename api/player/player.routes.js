const express = require("express");
const router = express.Router();

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

router.get("/state", getPlaybackState);
router.put("/transfer", doTransferPlayback);
router.get("/devices", getAvailDevices);
router.get("/curr-play", getCurrPlay);
router.put("/play", play);
router.put("/pause", pause);
router.post("/next", next);
router.post("/previous", previous);
router.put("/seek", seekToPosition);
router.put("/repeat", setRepeatMode);
router.put("/volume", setVolume);
router.put("/shuffle", toggleShuffle);
router.get("/recently-played", getRecentlyPlayed);
router.get("/queue", getQueue);
router.post("/queue", addToQueue);


module.exports = router;

