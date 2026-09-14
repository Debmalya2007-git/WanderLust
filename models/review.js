//Creating and exporting review model where users can add review for a listing
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//Creating review model
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
