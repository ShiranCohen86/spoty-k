const express = require("express");
const router = express.Router();
const { log } = require("../../middlewares/logger.middleware");
const { getMyUserDetails } = require("./users.controller");

router.get("/", log, getMyUserDetails);

module.exports = router;
