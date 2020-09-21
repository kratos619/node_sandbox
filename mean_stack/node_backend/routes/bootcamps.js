const express = require("express");
const {
  getBootCamps,
  createBootCamp,
  deleteBootCamp,
  updateBootCamp,
  getBootCampById,
} = require("../controller/bootcampController");
const router = express.Router();

router.get("/", getBootCamps);
router.get("/:id", getBootCampById);
router.post("/create", createBootCamp);
router.post("/update", updateBootCamp);
router.post("/delete", deleteBootCamp);

module.exports = router;
