const express = require("express");
const contactController = require("../controllers/ContactController");

const routes = express.Router();

routes.route("/").post(contactController.createNewContact);

module.exports = routes;
