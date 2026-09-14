const User = require("../models/user.js");

//Signup function
const rendersignupForm = (req, res) => {
  res.render("../views/user/signup.ejs");
};

//Signup a new user(adding a new user) function
const addUser = async (req, res, next) => {
  try {
    let { email, username, password } = req.body;
    let newUser = new User({ email, username });
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash(
        "success",
        "Welcome to WanderLust, You have successfully registered",
      );
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("failure", err.message);
    res.redirect("/signup");
  }
};

//Login form function
const renderLoginForm = (req, res) => {
  res.render("../views/user/login.ejs");
};

//Login check function
const loginCheck = async (req, res) => {
  const redirectUrl = res.locals.redirectUrl;
  req.flash("success", "Welcome to wanderlust!, You are in!");
  if (redirectUrl) {
    res.redirect(redirectUrl);
  } else {
    res.redirect("/listings");
  }
};

//Logout function
const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};

module.exports = {
  rendersignupForm,
  addUser,
  renderLoginForm,
  loginCheck,
  logout,
};
