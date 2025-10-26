require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGODB_AUTH_URI || 'mongodb://mongo:27017/authdb',
  jwtSecret: process.env.JWT_SECRET || "secret",
};
