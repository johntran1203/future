const { model, Schema} = require("mongoose")

// create schema
const foodSchema = new Schema (
    {
        location: {type: String, required: true, unique: true},
        food: [{type: String, required: true}],
        rating: {
            type: Number,
            min: [0, "Bruh that's too harsh"],
            max: [10, 'damn you must really like it'],
        },
    },
    {timestamps: true}
);

// export the model so we can use it somewhere
module.exports = model("Food", foodSchema);