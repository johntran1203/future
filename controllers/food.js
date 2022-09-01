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

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
}