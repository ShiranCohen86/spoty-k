const express = require("express");
const router = express.Router();

const {
    getAudiobookById,
    getAudiobooksByIds,
    getChaptersByAudiobookId,
    getSavedAudiobooks,
    addAudiobooksByIds,
    removeAudiobooksByIds,
    isAudiobooksSavedByIds

} = require("./audiobooks.controller");

router.get("/id", getAudiobookById);
router.get("/ids", getAudiobooksByIds);
router.get("/albums", getChaptersByAudiobookId);
router.get("/saved", getSavedAudiobooks);
router.put("/add", addAudiobooksByIds);
router.delete("/remove", removeAudiobooksByIds);
router.get("/is-saved", isAudiobooksSavedByIds);

module.exports = router;
