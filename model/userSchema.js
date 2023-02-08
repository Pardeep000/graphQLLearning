const mongoose = require("mongoose");
const { user } = require("../sampleData");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  job: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
