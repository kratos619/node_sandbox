const express = require("express");

const BootCampController = require("../controller/BootCampController");
const router = express.Router();

router.get("/", BootCampController.getBootCamps);
router.get("/:id", BootCampController.getBootCampById);
router.post("/create", BootCampController.createBootCamp);
router.post("/update", BootCampController.updateBootCamp);
router.post("/delete", BootCampController.deleteBootCamp);

module.exports = router;
