const { compareSync, hashSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");


// environmental variable
const SALT = process.env.SALT || 10;
const SECRET = process.env.SECRET || 'donthugabear'

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

module.exports = {
    comparePasswords,
    createToken,
    createUserInfo,
    hashPassword,
  };