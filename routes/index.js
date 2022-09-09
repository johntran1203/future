const { Router } = require("express");
const userRouter = require("./user");

const apiRouter = new Router();
apiRouter.use('/auth', userRouter);

module.exports = apiRouter;