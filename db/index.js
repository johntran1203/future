const mongoose = require("mongoose");

// choose connection string and the db name
const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/blogDatabase";
// process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/libeary_development"

//create  connection to database and signalling success
mongoose
    .connect(MONGODB_URI)
    .then(()=> console.log("Successful connection! 🚀"))
    .catch((e)=> console.log("MongoDB connection error", e.message))

// set debug mode to see queries in real time
mongoose.set("debug", true);

// save connection variable to use elsewhere
const db = mongoose.connection;

// create our error handlers
db.on("error", console.error.bind(console, "MongoDB connection error:"))

//export the db to use in other places
module.exports = db;
