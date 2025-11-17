const Contact = require("../models/Contact.Modal");

exports.createNewContact = async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  console.log(name, email, phone, service, message);

  if (!name || !email || !service) {
    return res
      .status(400)
      .json({ msg: "Please provide all the required fields" });
  }

  const newContact = await Contact.create({
    name,
    email,
    phone,
    service,
    message,
  });

  return res
    .status(201)
    .json({ msg: "New contact has been created successfully" });
};
