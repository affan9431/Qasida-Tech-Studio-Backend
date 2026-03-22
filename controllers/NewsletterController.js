const Newsletter = require("../models/Newsletter.model");

exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({
      email: email.toLowerCase().trim(),
      status: "active",
    });

    if (existing) {
      return res.status(200).json({
        success: true,
        message: "You're already subscribed! Thank you.",
      });
    }

    // Create new subscription
    const newSubscriber = await Newsletter.create({
      email: email.toLowerCase().trim(),
      source: req.body.source || "blog",
    });

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to newsletter!",
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already subscribed",
      });
    }

    console.error("Newsletter subscription error:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again",
    });
  }
};
