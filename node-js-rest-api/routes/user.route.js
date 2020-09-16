const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/UserController");
router.post("/user/create", createUser);

module.exports = router;
