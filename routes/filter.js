//Implementing the filter feature for the listings
const express = require("express");
const router = express.Router();
const filterController = require("../controllers/filter.js");

router.get("/", filterController);

module.exports = router;
