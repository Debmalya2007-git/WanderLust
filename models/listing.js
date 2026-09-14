const mongoose = require("mongoose");
const Review = require("./review.js");
const User = require("./user.js");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  },
  category: {
    type: String,
    enum: ["Mountains", "Arctic", "Farms", "Desert"],
  },
});

//Handling deletion of listing
//When we are deleting the listing, then automatically the reviews associated with that listing should be deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  } else {
    return;
  }
});

//creating model - listing
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
