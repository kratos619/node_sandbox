require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.APP_PORT || 5000;
const bootCampRoutes = require("./routes/bootcamps");
app.use("/api/v1/bootcamps", bootCampRoutes);
app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
