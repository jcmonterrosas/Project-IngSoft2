const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemReservaSchema = new Schema({
  ser_id: { type: String, required: false },
  usr_id: { type: String, required: true },
  hot_id: { type: String, required: false },
  res_id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: String, required: true },
  address: { type: String, required: true },
  contact_phone: { type: String, required: true },
  city: { type: String, required: true },
  child_quantity : { type: Number, required: true },
  adult_quantity : { type: Number, required: true },
  accommodation : { type: String, required: false },
  DateBegin : {type: Date, required: true },
  DateEnd : {type: Date, required: true }
});

module.exports = mongoose.model("ItemReserva", ItemReservaSchema);
