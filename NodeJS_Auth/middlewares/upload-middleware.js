const multer = require("multer");
const path = require("path");

// set our multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
// Returns a StorageEngine implementation configured to store files on the local file system.
// takes two options: filename, destination
// filename that is used to save the files in the destination

// file filter function
const checkFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Upload only images!"));
  }
};

// multer middleware
module.exports = multer({
  storage: storage,
  fileFilter: checkFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});
