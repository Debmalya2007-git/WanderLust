//Implementing the search feature for the listings
const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search.js");

router.get("/", searchController);

module.exports = router;
