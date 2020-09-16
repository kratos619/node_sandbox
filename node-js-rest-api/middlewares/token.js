const { verify } = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    const token = req.get("authorization");
    if (token) {
      verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          res.json({
            err: "invalid token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        message: "access denied",
      });
    }
  },
};
