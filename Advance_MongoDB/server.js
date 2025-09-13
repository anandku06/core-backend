const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, MongoDB with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
