const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/UserController");
const { check } = require("express-validator/check");
const users = require("../model/Users.model");
router.post(
  "/user/create",
  [
    check("email", "email required")
      .isEmail()
      .custom((value, { req }) => {
        return users.findOne({ email: value }).then((res) => {
          if (res) {
            return Promise.reject("Email alreay taken pick diffrent one");
          }
        });
      }),
    check("password", "password field required").notEmpty(),
  ],
  createUser
);

module.exports = router;
