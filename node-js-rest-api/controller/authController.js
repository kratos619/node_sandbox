const users = require("../model/Users.model");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const TOKEN_EXPIRES_TIME = "15s";
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const response = await users.findOne({
        where: {
          email,
        },
      });
      const match = await bcrypt.compare(password, response.password);
      if (match) {
        let data = {
          id: response.id,
          name: response.name,
          email: response.email,
        };
        return res.status(200).json({
          token: signToken(data),
          user: loggedInUser(response),
          expiresIn: TOKEN_EXPIRES_TIME,
        });
      } else {
        return res.json({ message: "password not match" });
      }
    } catch (error) {
      return res.json({ message: "auth fail" });
    }
  },
};

function signToken() {
  return sign({}, process.env.JWT_SECRET, {
    expiresIn: TOKEN_EXPIRES_TIME,
    issuer: process.env.APP_URL,
  });
}

function loggedInUser(response) {
  return {
    id: response.id,
    name: response.name,
    email: response.email,
    user_type: response.user_type,
  };
}
