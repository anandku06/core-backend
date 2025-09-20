const Product = require("../models/Product");

const insertProducts = async (req, res) => {
  try {
    const products = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 1200,
        inStock: true,
        tags: ["computer", "technology"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 800,
        inStock: true,
        tags: ["phone", "technology"],
      },
      {
        name: "Desk Chair",
        category: "Furniture",
        price: 150,
        inStock: false,
        tags: ["furniture", "office"],
      },
      {
        name: "Book - JavaScript Basics",
        category: "Books",
        price: 30,
        inStock: true,
        tags: ["book", "programming"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 200,
        inStock: true,
        tags: ["audio", "music"],
      },
    ];

    const result = await Product.insertMany(products);
    
    res.status(200).json({
      success: true,
      message: "Products inserted successfully",
      data: `${result?.length} products added.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = { insertProducts };