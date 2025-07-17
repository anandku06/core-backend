const express = require("express");
const path = require("path");

const app = express();

// set the view engine as ejs
app.set("view engine", "ejs");

// set the directory for views
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];

app.get("/", (req, res) => {
  // Render view with the given options and optional callback fn
  res.render("home", { products: products, title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});