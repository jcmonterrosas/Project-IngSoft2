const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  price_per_person: { type: String, required: true },
  acommodation: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Hotel", HotelSchema);
