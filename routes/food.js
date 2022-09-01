const { Router } = require('express')
const foodController = require("../controllers/food")

// create a new router
const foodRouter = new Router();

// make our GET route "/" and ref our controller's getALLfood function
foodRouter.get('/', foodController.getAllFoods);

// make a Get /:id route and ref our controller's getFoodById function
foodRouter.get("/:id", foodController.getFoodById);

// make a POSt/ route and ref our controller's food function
foodRouter.post('/',foodController.createFood);
// export to use elsewhere
module.exports = foodRouter;