const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: false },
  serImage: { type: String, required: true }
});

module.exports = mongoose.model("Image", imageSchema);
