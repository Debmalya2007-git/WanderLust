const Listing = require("../models/listing.js");

const filterList = async (req, res) => {
  let listings = await Listing.find({
    category: req.query.filter,
  });
  if (req.query.filter == "") {
    res.redirect("/listings");
  } else {
    if (!listings) {
      req.flash("error", "Category you filtered for do not exist!");
      res.render("../showError/nosearch.ejs");
    }
    res.render("../views/listing/index.ejs", { listings });
  }
};

module.exports = filterList;
