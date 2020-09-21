require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.APP_PORT || 


app.listen(process.env.APP_PORT,() => {
    console.log("app is running on port", process.env.APP_PORT)
});
