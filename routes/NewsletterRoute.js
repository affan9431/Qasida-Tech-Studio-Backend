const express = require("express");
const newsletterController = require("../controllers/NewsletterController");

const router = express.Router();

router.route("/subscribe").post(newsletterController.subscribeNewsletter);

module.exports = router;
