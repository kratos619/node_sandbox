require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");

const BootCamp = require("./models/BootCamp");
mongoose.connect(process.env.MONGO_CONNECTION_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// read files
const bootCamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);
