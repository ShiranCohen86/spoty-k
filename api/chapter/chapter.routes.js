const express = require("express");
const router = express.Router();

const {
    getChapterById,
    getChaptersByIds,

} = require("./chapter.controller");

router.get("/id", getChapterById);
router.get("/ids", getChaptersByIds);

module.exports = router;
