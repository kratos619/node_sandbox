const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_CONNECTION_URI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log("mongo db connected to host", connection.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
