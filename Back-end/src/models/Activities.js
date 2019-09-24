const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActSchema = new Schema({
  act_nombre: { type: String, required: true },
  act_descripcion: { type: String, required: true },
  precio: { type: String, required: true },
  cedula_responsable: { type: String, required: true },
  direccion: { type: String, required: true },
  direccion_contacto: { type: String, required: true },
  telefono_contacto: { type: String, required: true },
  responsable: { type: String, required: true },
  ciudad: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Activities", ActSchema);
