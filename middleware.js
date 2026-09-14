const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

//Middleware to check whether the user is logged in or not
const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You have not logged in!");
    req.session.redirectUrl = req.originalUrl;
    return res.redirect("/login");
  }
  next();
};

//Middleware to track the path the user was trying to access before login, so that after login the user is rediercted to that path
const saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//Middleware to prevent edit and delete when request is send from any API tester
const isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have permission to perform this action");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

//Middleware to prervent edit and delete of reviews by someone who is not the author of the review
const isAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

//Function to validate listing
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errorMsg = error.details.map((el) => el.message).join(",");
    return next(new ExpressError(400, errorMsg));
  } else {
    next();
  }
};

//Function to validate review
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  console.log(error);
  if (error) {
    let errorMsg = error.details.map((el) => el.message).join(",");
    console.log(errorMsg);
    return next(new ExpressError(400, errorMsg));
  } else {
    next();
  }
};

module.exports = {
  isLoggedIn,
  saveRedirectUrl,
  isOwner,
  validateListing,
  validateReview,
  isAuthor,
};
