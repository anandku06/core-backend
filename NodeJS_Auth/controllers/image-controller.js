const Image = require("../models/Image")
const {uploadToCloudinary} = require("../helpers/cloudinaryHelper")

const uploadImage = async (req, res) => {
    try {
        // check file
        if(!req.file){
            return res.status(400).json({
                success : false,
                message : "File not found! Try again!"
            })
        }

        // upload to cloudinary
        const {url, publicId} = await uploadToCloudinary(req.file.path)

        // store the imfo just got
        const newUploadedImage = new Image({
            url : url,
            publicId : publicId,
            uploadedBy : req.userInfo.userId
        })

        await newUploadedImage.save()

        res.status(201).json({
            success : true,
            message : "Image uploaded successfully!",
            image : newUploadedImage
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "Something went wrong! Please Try again!!"
        })
    }
}

module.exports = {
    uploadImage
}