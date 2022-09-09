const User = require("../models/user");
const {
  createToken,
  createUserInfo,
  comparePasswords,
  hashPassword,
} = require("../utils");

const login = async (req, res) => {
  try {
    const [user] = await User.find({ username: req.body.username });
    if (comparePasswords(req.body.password, user.password_digest)) {
      const userInfo = createUserInfo(user);
      const token = createToken(userInfo);
      return res.status(200).json({ user: userInfo, token });
    } else {
      return res.status(401).json({ message: "Not authorized!" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const register = async (req, res) => {
  try {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password_digest: hashPassword(req.body.password),
    };
    const user = await User.create(newUser);
    const userInfo = createUserInfo(user);
    const token = createToken(userInfo);
    return res.status(201).json({ user: userInfo, token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const verify = async (req, res) => {
  try {
    const userInfo = createUserInfo(user);
    return res.status(200).json({ user: userInfo });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  login,
  register,
  verify,
};