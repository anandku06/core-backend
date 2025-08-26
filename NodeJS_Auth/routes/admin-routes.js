const express = require("express")
const authMiddleware = require("../middlewares/auth-middleware")
const router = express.Router()


router.get('/welcome', authMiddleware, (req, res) => {
    res.json({
        message : 'Welcome to the admin page!'
    })
})

module.exports = router