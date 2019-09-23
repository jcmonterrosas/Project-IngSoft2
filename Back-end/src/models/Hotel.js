const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: { type: String, required: true },
  cedula: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Hotel", HotelSchema);
