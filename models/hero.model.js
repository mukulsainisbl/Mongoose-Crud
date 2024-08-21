const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
    name: String,
    powers: String,
    address: String,
    enemy: String,
  },
  {
    versionKey: false,
  }
);

const heroModel = mongoose.model("hero", heroSchema);

module.exports = { heroModel };
