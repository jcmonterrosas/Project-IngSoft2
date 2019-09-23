const express = require("express");
const cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT);

//midleware
app.use(cors());
app.use(express.json());

//routes
app.use("/hotels", require("./routes/hotel"));

module.exports = app;