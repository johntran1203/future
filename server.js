// import packages 
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

// import local files
// create the connection!
require("./db");
const foodRouter = require("./routes/food")
const api = require("./routes");

// set up express server
const app = express();
const PORT = process.env.PORT || 3001;

// use middleware
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// use router as middleware
app.use('/api', api);
app.use("/foods", foodRouter);

// root route that sends the user "This is the root route!"
app.get("/", (req, res) => {
    res.send("this is the root route!");
});

// listen and say "Listening on port PORT"
app.listen(PORT, ()=> console.log(`Server running on port ${PORT} 🍭!`));
