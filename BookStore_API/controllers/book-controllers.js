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

const getSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        message: "Book with the current ID is not found!",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

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

const updateBook = async (req, res) => {
  try {
    const updatedData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
      }
    );

    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book with this ID not found!!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book with this ID not found!!",
      });
    }

    res.status(200).json({
      success: true,
      data: deletedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  deleteBook,
  addNewBook,
  updateBook,
};
