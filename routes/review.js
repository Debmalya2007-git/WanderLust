const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { isLoggedIn, validateReview, isAuthor } = require("../middleware.js");

//Controllers
const reviewController = require("../controllers/review.js");
const addReview = reviewController.addReview;
const destroyReview = reviewController.destroyReview;
const reviewForm = reviewController.reviewForm;
const updateReview = reviewController.updateReview;

//Reviews Route (POST) To add a review
router.post("/", isLoggedIn, validateReview, wrapAsync(addReview));

router
  .route("/:reviewId")
  .put(isLoggedIn, isAuthor, validateReview, wrapAsync(updateReview)) //Reviews Route (PUT) To update a review
  .delete(isLoggedIn, isAuthor, wrapAsync(destroyReview)); //Reviews Route (DELETE) To delete a review

//Reviews Route (GET) To get the edit form for a review
router.get("/:reviewId/edit", isLoggedIn, reviewForm);

module.exports = router;
