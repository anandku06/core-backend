require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const bookRoutes = require("./routes/book-routes")


const app = express()
const PORT = process.env.PORT || 3000

// Connect to DB
connectToDB()

// middleware
app.use(express.json())

// routes 
app.use('/api/books', bookRoutes) // when on this URL, bookRoutes is implemented


app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})