const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const fs = require("fs");
Grid.mongo = mongoose.mongo;

const URI =
  "mongodb+srv://tpereza:Perez2017@ingsoft-2ditb.mongodb.net/test?retryWrites=true&w=majority";
const connection = mongoose
  .connect(URI, {
    useNewUrlParser: true
  })
  .then(db => console.log("db connected"))
  .catch(err => console.log(err));

const storage = new GridFsStorage({ db: connection });

module.exports = storage;
