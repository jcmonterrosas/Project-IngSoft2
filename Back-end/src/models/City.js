const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("City", CitySchema);
