if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Forces Node to use Google Public DNS

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");

const atlasDBURL = process.env.ATLASDB_URL;

//Connecting to mongoDB
main()
  .then(() => {
    console.log("Connection to database successful");
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exitCode = 1;
  });

async function main() {
  await mongoose.connect(`${atlasDBURL}`);
}

//Using session (Express-session)
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  }),
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")));

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error") || req.flash("failure");
  res.locals.currUser = req.user;
  next();
});

//Requiring our routes from Folder --> routes[ROUTER]
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const searchRouter = require("./routes/search.js");
const filterRouter = require("./routes/filter.js");

//Adding demo user for testing
// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "sigmaStudent",
//   });
//   let registeredUser = await User.register(fakeUser, "sigma12");
//   res.send(registeredUser);
// });

app.get("/privacy", (req, res) => {
  res.render("./rules/privacy.ejs");
});

app.get("/terms", (req, res) => {
  res.render("./rules/terms.ejs");
});

//Setting up middlewares for our routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/search", searchRouter);
app.use("/filter", filterRouter);

//For all other routes which is not defined in the project
app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

//Error Handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went Wrong" } = err;
  if (status == 404) {
    res.status(status).render("./showError/error-404.ejs");
  } else {
    res.status(status).render("error.ejs", { err });
  }
});

const port = 8080;
//Starting the server
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
