const jwt = require("jsonwebtoken");
const secret_key = process.env.JWT_KEY;

const generateToken = (id) => {
  return jwt.sign({ id }, secret_key, {
    expiresIn: 600,
  });
};

module.exports = { generateToken };
