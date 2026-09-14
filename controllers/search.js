const Listing = require("../models/listing.js");

const searchQuery = async (req, res) => {
  let query = req.query.query.trim();
  if (!query) {
    return res.render("./showError/nosearch.ejs");
  }

  let listings = await Listing.find({
    $or: [
      { tile: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
    ],
  });

  if (listings.length === 0) {
    return res.render("showError/nosearch");
  }

  res.render("listing/index.ejs", { listings });
};

module.exports = searchQuery;
