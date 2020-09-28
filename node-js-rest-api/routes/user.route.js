const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/UserController");
const { check } = require("express-validator/check");
router.post(
  "/user/create",
  check("email", "email required").isEmail(),
  check("password", "password field required").notEmpty(),
  createUser
);

module.exports = router;
