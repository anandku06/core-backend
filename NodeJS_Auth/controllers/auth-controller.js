const User = require("../models/User");

// register User
const registerUser = async (res, req) => {
  try {
    // extract user info
    const { username, email, password, role } = req.body;

    // check existing User in Db
    const userExists = await User.findOne({ $or: [{ username }, { email }] }); // or checks for two values (username or email)

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists, try with different username or email",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: "Something went wrong!!",
    });
  }
};

// login user
const loginUser = async (res, req) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: "Something went wrong!!",
    });
  }
};

module.exports = { loginUser, registerUser };
