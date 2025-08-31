const mongoose = require("mongoose");

// This schema will be used to store the Image details in the DB
const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required : true
  },
  uploadedBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
}, {timestamps : true});


module.exports = mongoose.model("Image", ImageSchema)