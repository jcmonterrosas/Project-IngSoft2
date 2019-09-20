const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  hot_nombre: { type: String, required: true },
  hot_direccion: { type: String, required: true },
  hot_ciudad: { type: String, required: true },
  tel_contacto: { type: String, required: true },
  acomodacion: { type: String, required: true },
  precio_persona: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Hotel", HotelSchema);
