const express = require("express");
const router = express.Router();

const {
    getGenres,
   
} = require("./genres.controller");

router.get("/genre-seeds", getGenres);


module.exports = router;
