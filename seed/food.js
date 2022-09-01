const db = require("../db");
const Food = require("../models/food");

const restaurant = async () => {
    const foods = [
        {
            location: '7 leaves',
            food: ['mung bean milk tea'],
            rating: 8,
        },
        {
            location: 'IN-N-OUT',
            food: ['Double-Dobule', 'fries', 'Dr. pepper'],
            rating: 8.5,
        },
        {
            location: '7-eleven',
            food: ['pizza'],
            rating: 0,
        }
    ];
    // add some food place to database
    await Food.insertMany(foods)
    console.log("seed food data is working! 🍕")

}

const run = async () => {
    await restaurant()
    db.close()
}

run()