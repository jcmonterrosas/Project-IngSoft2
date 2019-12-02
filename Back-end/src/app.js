const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");

const { storage, gfs } = require("./database");

const upload = multer({ storage });
//settings
app.set("port", process.env.PORT || 3000);

//midleware
app.use(cors());
app.use(express.json());
//routes
app.use("/hotels", require("./routes/hotel"));
app.use("/services", require("./routes/services"));
app.use("/user", require("./routes/user"));
app.use("/reserva", require("./routes/reserva"));


module.exports = app;
