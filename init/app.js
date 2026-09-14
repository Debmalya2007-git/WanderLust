const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
let initData = require("./data.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
  await initDatabase();
  console.log("Database initialized successfully");
  await mongoose.connection.close();
}

async function initDatabase() {
  await Listing.deleteMany();

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a97ab4f71016745332aaea0",
  }));
  await Listing.insertMany(initData.data);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
