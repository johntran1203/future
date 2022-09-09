const { Router } = require("express");
const userController = require("../controllers/user");
const { restrict } = require("../utils");

const userRouter = new Router();

userRouter.use("/login", userController.login);
userRouter.use("/register", userController.register);
userRouter.use("/verify", restrict, userController.verify);

module.exports = userRouter;