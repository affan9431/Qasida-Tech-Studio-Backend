const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  service: {
    type: String,
    reuired: true,
  },
  message: { type: String },
});

module.exports = mongoose.model("Contact", ContactSchema);
