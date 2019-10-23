const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  usr_nombre: { type: String, required: true },
  usr_telefono: { type: String, required: true },
  usr_correo: { type: String, required: true },
  usr_pass: { type: String, required: true },
  usr_tipo_doc: { type: String, required: true },
  usr_identificacion: {type: String, required: true},
  usr_rol: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
