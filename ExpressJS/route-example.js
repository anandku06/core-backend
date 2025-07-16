const express = require("express");
const app = express();

// root route
app.get("/", (req, res) => {
  res.send("Welcome to our home page!!");
});

// suppose to get all products in a store website
// made a get route with '/product' endpoint
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  res.json(products); // to send this to the page in JSON format
});

// get a single product using dynamic routing -> using that colon(:) with the param name
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id); // name should be same from the endpoint(here, id)
  // (req.params): returns the parameters object from the url
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  const singleProduct = products.find((prod) => prod.id === id);

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("Product not found!!");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});
