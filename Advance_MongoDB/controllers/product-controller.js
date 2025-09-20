const Product = require("../models/Product");

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          inStock: true,
          price: { $gt: 100 },
        },
      },
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$price" },
          avgPrice: { $avg: "$price" },
          maxPrice: { $max: "$price" },
          minPrice: { $min: "$price" },
        },
      },
      {
        $project: {
            _id: 0,
            totalRevenue: 1,
            avgPrice: 1,
            maxPrice: 1,
            minPrice: 1,
            priceRange: { $subtract: ["$maxPrice", "$minPrice"]}
        }
      }
    ]);

    res.status(200).json({
      success: true,
      message: "Product analysis fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

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

module.exports = { insertProducts, getProductStats, getProductAnalysis };
