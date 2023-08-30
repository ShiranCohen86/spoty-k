const express = require("express");
const router = express.Router();

const {
    getCategoryById,
    getCategories,
} = require("./categories.controller");

router.get("/id", getCategoryById);
router.get("/", getCategories);

module.exports = router;
