const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET_KEY;

const signToken = (payload) => {
    return jwt.sign(payload, SECRET);
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET);
};

module.exports = { signToken, verifyToken };
