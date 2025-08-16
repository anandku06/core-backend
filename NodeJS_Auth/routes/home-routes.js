const express = require('express')
const router = express.Router()

// to protect this route, we attach a handler function, that'll check whether the user is authenticated or not before visiting this route
router.get('/', (req, res) => {
    res.json({
        message : "Welcome to the Home Page!"
    })
})

module.exports = router