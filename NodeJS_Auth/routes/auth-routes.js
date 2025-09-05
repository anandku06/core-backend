const express = require("express");
const { registerUser, loginUser, changePassword } = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware")

const router = express.Router();

// all routes are related to authentication & authorization
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/change_pass", authMiddleware, changePassword)

module.exports = router;
