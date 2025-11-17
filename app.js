const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config({});

const contactRoute = require("./routes/ContactRoute");

const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://qasidatechstudio.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);

mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error: " + err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello From The Server");
});

app.use("/api/contact", contactRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
