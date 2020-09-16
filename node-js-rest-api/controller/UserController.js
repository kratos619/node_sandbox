const { genSaltSync, hashSync } = require("bcrypt");
const { body } = require("express-validator");
const users = require("../model/Users.model");

module.exports = {
  createUser: (req, res) => {
    const { name, email, password } = req.body;
    users
      .create({
        name: name,
        email: email,
        password: hashPassword(password),
        user_type: "admin",
      })
      .then((result) => {
        return res.status(200).json({
          result: JSON.stringify(result),
        });
      })
      .catch((err) => {
        return res.status(200).json({
          result: err,
          password: hashPassword(password),
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
