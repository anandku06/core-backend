const jwt = require('jsonwebtoken')


const authMiddleware = (req, res, next) => {

    const authHeaders = req.headers["authorization"]
    const token = authHeaders && authHeaders.split(" ")[1] // check whether authHeaders exist or not, if yes then only split
    if (!token){
        return res.status(401).json({
            success : false,
            message : 'Access denied. Please login to continue!'
        })
    }

    // decode this token
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY) // Synchronously verify given token using a secret or a public key to get a decoded token token

        req.userInfo = decodedToken // now this made a new key-value in the req object
        // it can be accessed using the req object
        next()

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong!"
        })
    }

}

module.exports = authMiddleware