const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemReservaTemporalSchema = new Schema({
  user_id: {type: String, required: true },
  hotel_o_servicio: { type: Boolean, required: true }, // es true cuando es hotel, false para servicio
  child_quantity : { type: Number, required: true },
  adult_quantity : { type: Number, required: true },
  name: { type: String, required: true },
  usr_id_responsable: { type: String, required: true },
  nombre_responsable: {type: String, required: true },
  departamento: {type: String, required: true},
  city: { type: String, required: true },
  address: { type: String, required: true },
  contact_phone: { type: String, required: true },
  price: { type: String, required: true },
  images: {type: [String], required: true },
  DateBegin : {type: Date, required: true },
  DateEnd : {type: Date, required: true },
  ser_id: { type: String, required: false },
  categoria: {type: String, required: false },
  description: { type: String, required: false },
  act_lugar: {type: String, required: false},
  hot_id: { type: String, required: false },
  accommodation : { type: String, required: false },
  hab_ind: { type: String, required: false },
  hab_dob: { type: String, required: false },
  hab_fam: { type: String, required: false },
  hab_mul: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ItemReservaTemporal", ItemReservaTemporalSchema);
