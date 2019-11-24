const express = require("express");
const cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//midleware
app.use(cors());
app.use(express.json());

//routes
app.use("/hotels", require("./routes/hotel"));
app.use("/services", require("./routes/services"));
app.use("/city", require("./routes/city"));
app.use("/user", require("./routes/user"));

module.exports = app;
