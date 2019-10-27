const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSessionSchema    = new Schema({
  usr_id: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UserSession", UserSessionSchema);
