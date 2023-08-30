const express = require("express");
const router = express.Router();

const {
    getAlbumById,
    getAlbumsByIds,
    getTracksByAlbumId,
    getSavedAlbums,
    addAlbumsByIds,
    removeAlbumsByIds,
    isAlbumsSavedByIds,
    getNewReleases,
} = require("./albums.controller");

router.get("/id", getAlbumById);
router.get("/ids", getAlbumsByIds);
router.get("/tracks", getTracksByAlbumId);
router.get("/saved", getSavedAlbums);
router.put("/add", addAlbumsByIds);
router.delete("/remove", removeAlbumsByIds);
router.get("/is-saved", isAlbumsSavedByIds);
router.get("/new", getNewReleases);

module.exports = router;
