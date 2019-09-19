const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test-tom", {
    useNewUrlParser: true
  })
  .then(db => console.log("db connected"))
  .catch(err => console.log(err));
