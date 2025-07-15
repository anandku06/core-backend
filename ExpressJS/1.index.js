const express = require('express') // imported this express module

const app = express() // made an Express app instance here

// get route on base_url
// req, res are objects that contains request info and what to send as response
app.get("/", (req, res) => {
    res.send("Hello World!!")
})


// Listen for connections.
app.listen(3000, () => {
    console.log("Server is listening on port: 3000")
})