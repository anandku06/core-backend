const Book = require("../models/books");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books fetched successfully!",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Books found!!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};

const getSingleBook = async (req, res) => {};

const addNewBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    if (newBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully!",
        data: newBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};

const updateBook = async (req, res) => {};

const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBook,
  deleteBook,
  addNewBook,
  updateBook,
};
