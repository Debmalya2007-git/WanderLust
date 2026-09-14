const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Controllers
const listingController = require("../controllers/listing.js");
const index = listingController.index;
const newListingForm = listingController.newListingForm;
const createListing = listingController.createListing;
const showListing = listingController.showListing;
const editForm = listingController.editForm;
const updateListing = listingController.updateListing;
const destroyListing = listingController.destroyListing;

router
  .route("/")
  .get(wrapAsync(index)) //Index route
  .post(
    isLoggedIn,
    upload.single("image"),
    validateListing,
    wrapAsync(createListing),
  ); //Create listing route

//New listing form route
router.get("/new", isLoggedIn, newListingForm);

router
  .route("/:id")
  .get(wrapAsync(showListing)) //Show route
  .put(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    validateListing,
    wrapAsync(updateListing),
  ) //Update route
  .delete(isLoggedIn, isOwner, wrapAsync(destroyListing)); //Delete route

//Edit Form route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(editForm));

module.exports = router;
