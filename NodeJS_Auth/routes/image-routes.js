const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin_middleware");
const multerMiddleware = require("../middlewares/upload-middleware");
const {
  uploadImage,
  fetchImage,
  deleteImage,
} = require("../controllers/image-controller");

// upload the image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  multerMiddleware.single("image"),
  uploadImage
);

// to get all the images
router.get("/", authMiddleware, fetchImage);

// delete image
router.delete("/:id", authMiddleware, adminMiddleware, deleteImage)

module.exports = router;
