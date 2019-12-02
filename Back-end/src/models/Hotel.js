const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: { type: String, required: true },
  usr_id: { type: String, required: true },
  ciudad: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  price_per_person: { type: String, required: true },
  telefono_contacto: { type: String, required: true },
  acommodation: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Hotel", HotelSchema);
