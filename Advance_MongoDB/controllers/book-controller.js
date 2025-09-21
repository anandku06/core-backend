const Book = require("../models/Book")
const Author = require("../models/Author")


const createAuthor = async (req, res) => {
    try {
        const newAuthor = new Author(req.body)
        await newAuthor.save()
        res.status(201).json({
            success: true,
            message: "Author created successfully",
            data: newAuthor
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}


const createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body)
        await newBook.save()
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: newBook
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

const getBookAuthor = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author') // Populate author details
        // Populate will fetch the author details from Author collection based on ObjectId reference

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Book fetched successfully",
            data: book
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

module.exports = { createAuthor, createBook, getBookAuthor }