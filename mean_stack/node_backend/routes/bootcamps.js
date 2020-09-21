const express = require("express");

const BootCampController = require("../controller/BootCampController");
const router = express.Router();

router.get("/", BootCampController.getBootCamps);
router.get("/:id", BootCampController.getBootCampById);
router.post("/create", BootCampController.createBootCamp);
router.put("/update/:id", BootCampController.updateBootCamp);
router.delete("/delete/:id", BootCampController.deleteBootCamp);

module.exports = router;
