// controller goes first before routes
const Food = require("../models/food")

const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find({});
        res.json(foods)
    } catch (e) {
        res.status(500).json({error: e.message });
    }
}

// GET/food/:id
const getFoodById = async (req, res) => {
    try {
        const {id} = req.params;
        const food = await Food.findById(id);
        res.json(food);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
}

//POST /food
const createFood = async (req, res) => {
    try {
        // make a new food by using the constructor
        const food = new Food(req.body);
        await food.save()
        res.status(201).json(food);

    } catch (e) {
        res.status(500).json({ error: e.message});
    }
}
//Delete food/:id
const deleteFood = async (req, rest) => {
    try {
        // get id
        const { id } = req.params;
        // findByIdAndeDelte
        Food.findByIdAndDelete(id, (err, food) => {
            //if there's an error
            if(err) {
                return res.status(500).json({error: err.message});
            }
            // location does not exist
            if(!food) {
                return res.status(404).json({error: "Your data is somewhere else for some reason. HUHHHH"});
            }
            // success!!
            res.status(204).send(`location with id ${id} successfully deleted!`);
        });
    } catch(e) {
        rest.status(500).json({error: e.message });
    }
}

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    deleteFood,
}