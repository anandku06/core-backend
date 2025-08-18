const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

// to protect this route, we attach a handler function, that'll check whether the user is authenticated or not before visiting this route
// the get method can take handler functions that are used for auth, and much more things

router.get("/", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to the Home Page!",
  });
});
// now whenever this route is called, the handler function "authMiddleware" will be called before the actual response

module.exports = router;
