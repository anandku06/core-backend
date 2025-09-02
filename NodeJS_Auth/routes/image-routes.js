const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin_middleware")

// upload the image
router.post('/upload', authMiddleware, adminMiddleware, )

// to get all the images


module.exports = router