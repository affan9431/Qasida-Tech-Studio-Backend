const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
  },
  source: {
    type: String,
    default: "blog",
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "unsubscribed"],
    default: "active",
  },
});

// Index for faster queries
NewsletterSchema.index({ status: 1, subscribedAt: -1 });

module.exports = mongoose.model("Newsletter", NewsletterSchema);
