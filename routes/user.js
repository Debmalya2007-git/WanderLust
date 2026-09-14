const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { saveRedirectUrl } = require("../middleware.js");

//Controllers
const userController = require("../controllers/user.js");
const rendersignupForm = userController.rendersignupForm;
const addUser = userController.addUser;
const renderLoginForm = userController.renderLoginForm;
const loginCheck = userController.loginCheck;
const logout = userController.logout;

//SIGNUP
router
  .route("/signup")
  .get(rendersignupForm) //To get form for signup (GET)
  .post(addUser); //To add a new user (POST)

//Login
router
  .route("/login")
  .get(renderLoginForm) //To get form for login(GET)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: { message: "Invalid username or password" },
    }),
    loginCheck, //To match the logging in user with our database
  );

//Logout
router.get("/logout", logout);

module.exports = router;
