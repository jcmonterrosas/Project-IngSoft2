const mongoose = require("mongoose");

const URI =
  "mongodb+srv://tpereza:Perez2017@ingsoft-2ditb.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(URI, {
    useNewUrlParser: true
  })
  .then(db => console.log("db connected"))
  .catch(err => console.log(err));
