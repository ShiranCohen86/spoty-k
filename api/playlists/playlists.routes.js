const express = require("express");
const router = express.Router();

const {
    getPlaylistById,
    editPlaylistDetailsById,
    getTrackByPlaylistId,
    editTracksByPlaylistId,
    addItemsToPlaylist,
    removeItemsToPlaylist,
    getPlaylists,
    getPlaylistsByUserId,
    createPlaylist,
    getFeaturedPlaylists,
    getPlaylistByCategoryId,
    getCoverImgByPlaylistId,
    addPlaylistCoverImg
    
} = require("./playlists.controller");

router.get("/", getPlaylistById);
router.put("/", editPlaylistDetailsById);
router.get("/tracks", getTrackByPlaylistId);
router.put("/tracks", editTracksByPlaylistId);
router.post("/add", addItemsToPlaylist);
router.delete("/remove", removeItemsToPlaylist);
router.get("/me", getPlaylists);
router.get("/by-user", getPlaylistsByUserId);
router.post("/create", createPlaylist);
router.get("/featured", getFeaturedPlaylists);
router.get("/category", getPlaylistByCategoryId);
router.get("/cover", getCoverImgByPlaylistId);
router.put("/cover", addPlaylistCoverImg);

module.exports = router;

