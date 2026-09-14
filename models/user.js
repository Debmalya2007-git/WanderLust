//Creating the user schema and exporting the User model
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passportLocalPlugin =
  passportLocalMongoose.default || passportLocalMongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.plugin(passportLocalPlugin);

module.exports = mongoose.model("User", userSchema);
