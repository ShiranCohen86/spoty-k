const express = require("express");
const router = express.Router();

const {
    getArtistById,
    getArtistsByIds,
    getAlbumsByArtistId,
    getTopTracksByArtistId,
    getRelatedArtists,
} = require("./artists.controller");

router.get("/id", getArtistById);
router.get("/ids", getArtistsByIds);
router.get("/albums", getAlbumsByArtistId);
router.get("/top", getTopTracksByArtistId);
router.get("/related", getRelatedArtists);

module.exports = router;
