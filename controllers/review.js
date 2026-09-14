const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");

//Add a Review
const addReview = async (req, res) => {
  const { id } = req.params;
  let newReview = new Review(req.body);
  newReview.author = req.user._id;

  let listing = await Listing.findById(id);
  if (!listing) {
    return new ExpressError(404, "Listing Not Found");
  } else {
    listing.reviews.push(newReview);
    await listing.save();
    await newReview.save();
    req.flash("success", "Review added successfully");
    res.redirect(`/listings/${id}`);
  }
};

//Delete a Review
const destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted successfully");
  res.redirect(`/listings/${id}`);
};

//Review Form
const reviewForm = async (req, res) => {
  let { id, reviewId } = req.params;
  let listing = await Listing.findById(id);
  let review = await Review.findById(reviewId);
  res.render("./review/reviewedit.ejs", { listing, review });
};

//Update Review
const updateReview = async (req, res) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  let updatedReview = await Review.findByIdAndUpdate(reviewId, req.body);
  req.flash("success", "Review edited successfully");
  res.redirect(`/listings/${id}`);
};

module.exports = { addReview, destroyReview, reviewForm, updateReview };
