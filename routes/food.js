const { Router } = require('express')
const foodController = require("../controllers/food")

// create a new router
const foodRouter = new Router();

// make our GET route "/" and ref our controller's getALLfood function
foodRouter.get('/', foodController.getAllFoods);

// export to use elsewhere
module.exports = foodRouter;