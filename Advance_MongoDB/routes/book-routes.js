const router = require("express").Router()
const { createAuthor, createBook, getBookAuthor } = require("../controllers/book-controller")

router.post("/author", createAuthor)
router.post("/book", createBook)
router.get("/book/:id", getBookAuthor) // Get book along with author details, using populate

module.exports = router