const { compareSync, hashSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const User = require("../models/user");

// environmental variable
// const SALT = process.env.SALT || 10;
// const SECRET = process.env.SECRET || 'donthugabear'
const SALT = 10;
const SECRET = "donthugabear";

// when giving th user their information, scrub sensitive or unused information
const createUserInfo = (user) => {
  return {
    username: user.username,
    email: user.email,
    id: user._id,
  }
}

// afert logging in / registering, give user a verfiable token
const createToken = (payload) => sign(payload, SECRET);

// when logging in, we want to compare the entered password vs. the hashed user password
const comparePasswords = (password, passwordDigest) => compareSync(password, passwordDigest);

// when registering, we want to create a hashed password
const hashPassword = (password) => hashSync(password, SALT);

const restrict = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error();
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    const { username } = verify(token, SECRET);
    if (username) {
      const [user] = await User.find({ username });
      res.locals.user = user;
      next();
    } else {
      throw new Error();
    }
  } catch (e) {
    return res.status(401).json({ message: "Not authorized!" });
  }
};

module.exports = {
  comparePasswords,
  createToken,
  createUserInfo,
  hashPassword,
  restrict,
};
