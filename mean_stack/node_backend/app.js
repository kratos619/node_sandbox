require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const logger = require("./middleware/logger");
const app = express();
const PORT = process.env.APP_PORT || 5000;
const bootCampRoutes = require("./routes/bootcamps");
if (process.env.APP_ENV == "development") {
  app.use(logger);
}

app.use("/api/v1/bootcamps", bootCampRoutes);
connectDB();
app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
