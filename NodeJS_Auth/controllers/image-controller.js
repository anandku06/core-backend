const Image = require("../models/Image")
const {uploadToCloudinary} = require("../helpers/cloudinaryHelper")
const fs = require("fs")
const cloudinary_js_config  = require("../config/cloudinary")


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

        // delete the file from the local storage
        fs.unlinkSync(req.file.path)

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

const fetchImage = async (req, res) => {
    try {
        const user = req.userInfo.userId
        const images = await Image.find({
            uploadedBy : user
        })

        if(images) {
            res.status(200).json({
                success : true,
                data : images
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "Something went wrong!"
        })
    }
}

const deleteImage = async (req, res) => {
    try {
        const getImageId = req.params.id
        const userId = req.userInfo.userId

        const image = await Image.findById(getImageId)
        if(!image) {
            return res.status(404).json({
                success : false,
                message : "Image not found!!"
            })
        }

        // check if this image uplaoded by the logged-in user
        // but the images shown are according to the user so it isn't needed

        // delete this image from the cloudinary
        await cloudinary_js_config.uploader.destroy(image.publicId)

        // delete this from the mongodb
        await Image.findByIdAndDelete(getImageId)

        res.status(200).json({
            success : true,
            message : "Image deleted successfully!"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "Something went wrong!!"
        })
    }
}

module.exports = {
    uploadImage,
    fetchImage,
    deleteImage
}