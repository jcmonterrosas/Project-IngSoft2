const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActSchema = new Schema({
  act_nombre: { type: String, required: true },
  act_descripcion: { type: String, required: true },
  precio: { type: String, required: true },
  categoria: { type: String, required: true },
  usr_id: { type: String, required: true },
  act_lugar: { type: String, required: true },
  telefono_contacto: { type: String, required: true },
  departamento: { type: String, required: true },
  ciudad: { type: String, required: true },
  direccion: { type: String, required: true },
  images: { type: [String], required: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Services", ActSchema);
