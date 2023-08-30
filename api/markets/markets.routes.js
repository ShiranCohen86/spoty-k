const express = require("express");
const router = express.Router();

const {
    getMarkets,

} = require("./markets.controller");

router.get("/markets", getMarkets);


module.exports = router;
