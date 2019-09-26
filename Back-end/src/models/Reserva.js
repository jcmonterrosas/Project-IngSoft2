const mongoose = require("mongoose");
const { Schema } = mongoose;
const ActSchema = require("./Activities");

const ResSchema = new Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activities"
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel"
  },
  name: { type: String, required: true }
  /*numero_reserva: { type: String, required: true }, // se agrupa por este numero, hay que generar el numero aleatorio, por cada actividad se agrega una reserva.
  fecha_inicio_act: { type: String, required: true },
  cedula_cliente: { type: String, required: true },
  numero_personas: { type: String, required: true },
  telefono_responsable: { type: String, required: true },
  direccion_responsable: { type: String, required: true },
  fecha_fin_act: { type: String, required: true },
  origen: { type: String, required: true },
  destino: { type: String, required: true },
  adultos: { type: String, required: true },
  ninos: { type: String, required: true },
  estado: { type: String, required: true },
  date: { type: Date, default: Date.now }*/
});

module.exports = mongoose.model("Reserva", ResSchema);
