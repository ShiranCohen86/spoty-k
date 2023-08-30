const express = require("express");
const router = express.Router();

const {
    getMyDetails,
    getMyTopItems,
    getUserProfile,
    followPlaylistById,
    unFollowPlaylistById,
    getFollowedArtists,
    followUsersByIds,
    unFollowUsersByIds,
    isMeFollowsUsers,
    isMeFollowsPlaylist
} = require("./users.controller");

router.get("/me", getMyDetails);
router.get("/me/top", getMyTopItems);
router.get("/", getUserProfile);
router.put("/follow-playlist", followPlaylistById);
router.delete("/unfollow-playlist", unFollowPlaylistById);
router.get("/followed-artists", getFollowedArtists);
router.put("/follow-users", followUsersByIds);
router.delete("/unfollow-users", unFollowUsersByIds);
router.get("/is-follows-users", isMeFollowsUsers);
router.get("/is-follows-playlist", isMeFollowsPlaylist);

module.exports = router;
