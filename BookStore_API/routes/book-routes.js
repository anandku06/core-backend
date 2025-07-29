const express = require('express')
const {getAllBooks, getSingleBook, updateBook, deleteBook, addNewBook} = require('../controllers/book-controllers')

// create express router
const router = express.Router()

// all the routes related to books
router.get('/get', getAllBooks)
router.get("/get/:id", getSingleBook)
router.post('/add', addNewBook)
router.put("/update/:id", updateBook)
router.delete("/delete/:id", deleteBook)

module.exports = router