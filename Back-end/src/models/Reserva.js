
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservaSchema = new Schema({
  usr_id: { type: String, required: true },
  name: { type: String, required: true },
  price_total: { type: String, required: true },
  price_exclude_iva: { type: String, required: true },
  state: { type: String, default: "Confirmando"} // confirmado, paga, cancelada, finalizada
});

module.exports = mongoose.model("Reserva", ReservaSchema);
