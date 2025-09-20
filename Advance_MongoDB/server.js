const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require('./routes/product-routes')
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGODB_URI;

// connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use(express.json());
app.use('/products', productRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
