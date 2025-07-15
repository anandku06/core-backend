const express = require("express");
const app = express();

// Application-Level Settings are configuration options that control how your Express application behaves
app.set("view engine", "ejs");

// routing
app.get("/", (req, res) => {
  res.send("home page");
});

app.post("/api/data", (req, res) => {
  res.json({
    message: "Data received",
    data: req.body,
  });
});

// middlewares
// app.use(err, req, res, next) // these params are provided in this method
app.use((err, res, req, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong!");
});
