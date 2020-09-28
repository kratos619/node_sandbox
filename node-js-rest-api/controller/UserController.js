const { genSaltSync, hashSync } = require("bcrypt");
const { body, validationResult } = require("express-validator");
const users = require("../model/Users.model");

module.exports = {
  createUser: (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        result: errors.array(),
      });
    }
    users
      .create({
        name: name,
        email: email,
        user_type: "admin",
        password: hashPassword(password),
      })
      .then((result) => {
        return res.status(200).json({
          result: result,
        });
      })
      .catch((err) => {
        return res.status(200).json({
          error: err,
        });
      });
  },
};

function hashPassword(password) {
  let cryptedPassword;
  const salt = genSaltSync(10);
  cryptedPassword = hashSync(password, salt);
  return cryptedPassword;
}

function parseError(err) {
  err;
}
