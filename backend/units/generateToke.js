const jwt = require("jsonwebtoken");
const { user } = require("../config/prisma");
const { email } = require("zod");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
};

module.exports = generateToken;
