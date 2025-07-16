const express = require('express')
const app = express()

// define middleware function
const myFirstMiddleware = (req, res, next) => {
    console.log("This middleware will run on every request")
    next() // this calls the next function or middleware if available
    // if not then the execution will stop here only
}

// custom middleware
const requestTimeStampLogger = (req, res, next) => {
    const timeStamp = new Date().toLocaleString()

    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(myFirstMiddleware) // this will use this middleware on every route
app.use(requestTimeStampLogger)

app.get('/', (req, res) => {
    res.send("Home page!")
})

app.get('/about', (req, res) => {
    res.send("About page!")
})

app.listen(3000, () => {
    console.log("Server is running!!")
})