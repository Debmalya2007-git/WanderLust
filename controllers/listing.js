const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const axios = require("axios");

//Index function
const index = async (req, res) => {
  let listings = await Listing.find();
  res.render("../views/listing/index.ejs", { listings });
};

//New listing form function
const newListingForm = (req, res) => {
  res.render("../views/listing/new.ejs");
};

//Create listing function
const createListing = async (req, res, next) => {
  let { location } = req.body;

  if (Object.keys(req.body).length === 0) {
    return next(new ExpressError(400, "You provided invalid data for listing"));
  }
  req.body.owner = req.user._id;
  const newListing = new Listing(req.body);
  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  let mapApiKey = process.env.MAP_API_KEY;
  let geourl = `https://geocode.maps.co/search?q=${encodeURIComponent(location)}&api_key=${mapApiKey}`;
  let response = await axios.get(geourl);

  let geocodedLocation = response.data[0];
  if (!geocodedLocation) {
    return next(
      new ExpressError(400, "We could not find the location you provided"),
    );
  }
  let longitude = Number(geocodedLocation.lon);
  let latitude = Number(geocodedLocation.lat);

  if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) {
    return next(
      new ExpressError(400, "We could not find the location you provided"),
    );
  }
  //Storing data in database in the form of GeoJSON
  newListing.geometry = {
    type: "Point",
    coordinates: [longitude, latitude],
  };

  let savedListing = await newListing.save();

  req.flash("success", "Listing created successfully");
  res.redirect(`/listings/${newListing._id}`);
};

//Show function
const showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
        strictPopulate: false,
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("failure", "Listing you requested for does not exist");
    res.redirect("/listings");
  } else {
    res.render("../views/listing/show.ejs", { listing });
  }
};

//Edit Form function
const editForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("failure", "Listing you requested for does not exist");
    res.redirect("/listings");
  }
  let currImgUrl = listing.image.url;
  if (currImgUrl.indexOf("?") != -1) {
    listing.image.url = currImgUrl.replace("?", "?w=300&h=300&fit=pad&");
  } else {
    listing.image.url = currImgUrl.replace("/upload", "/upload/h_300,w_300");
  }
  res.render("../views/listing/edit.ejs", { listing });
};

//Update function
const updateListing = async (req, res) => {
  let { id } = req.params;
  if (req.file) {
    req.body.image = {
      url: req.file.path,
      filename: req.file.pathname,
    };
  }
  await Listing.findByIdAndUpdate(id, req.body);
  req.flash("success", "Listing updated successfully");
  res.redirect(`/listings/${id}`);
};

//Destroy function
const destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully");
  res.redirect("/listings/");
};

module.exports = {
  index,
  newListingForm,
  createListing,
  showListing,
  editForm,
  updateListing,
  destroyListing,
};
