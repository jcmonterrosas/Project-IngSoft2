const mongoose = require("mongoose");
const { Schema } = mongoose;

const RolSchema = new Schema({
  rol_name: { type: String, required: true },
});

module.exports = mongoose.model("Rol", RolSchema);
