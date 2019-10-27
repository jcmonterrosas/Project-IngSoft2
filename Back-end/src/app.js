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
app.use("/activity", require("./routes/activities"));
app.use("/reserva", require("./routes/reserva"));
app.use("/user", require("./routes/user"));

module.exports = app;
