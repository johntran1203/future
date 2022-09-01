const Food = require("../models/food")

const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find({});
        res.json(foods)
    } catch (e) {
        res.status(500).json({error: e.message });
    }
}

module.exports = {
    getAllFoods,
}