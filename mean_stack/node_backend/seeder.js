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

//import data in db
const importData = async () => {
  try {
    await BootCamp.create(bootCamps);
    console.log("data Imported...");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// delete data
const deleteData = async () => {
  try {
    await BootCamp.deleteMany();
    console.log("data Dstroyed...");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
