const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin_middleware");
const multerMiddleware = require("../middlewares/upload-middleware");
const { uploadImage } = require("../controllers/image-controller");

// upload the image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  multerMiddleware.single("image"),
  uploadImage
);

// to get all the images

module.exports = router;
