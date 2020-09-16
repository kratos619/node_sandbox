const users = require("../model/Users.model");
const bcrypt = require("bcrypt");
// const { where } = require("sequelize/types");
const { sign } = require("jsonwebtoken");
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
        });
      } else {
        return res.json({ message: "password not match" });
      }
    } catch (error) {
      return res.json({ message: "auth fail" });
    }
  },
};

function signToken(data) {
  return sign({ data }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}
