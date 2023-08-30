const express = require("express");
const router = express.Router();

const {
    getTrackById,
    getTracksByIds,
    getSavedTracks,
    addTracksByIds,
    removeTracksByIds,
    isTracksSavedByIds,
    getAudioFeaturesByTracksIds,
    getAudioFeaturesByTrackId,
    getAudioAnalysisByTrackId,
    getRecommendationTracks
} = require("./tracks.controller");

router.get("/id", getTrackById);
router.get("/ids", getTracksByIds);
router.get("/saved", getSavedTracks);
router.put("/add", addTracksByIds);
router.delete("/remove", removeTracksByIds);
router.get("/is-saved", isTracksSavedByIds);
router.get("/audio-features-by-tracks", getAudioFeaturesByTracksIds);
router.get("/audio-features-by-track", getAudioFeaturesByTrackId);
router.get("/audio-analysis", getAudioAnalysisByTrackId);
router.get("/recommendation", getRecommendationTracks);

module.exports = router;
