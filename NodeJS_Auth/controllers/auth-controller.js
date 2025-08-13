const User = require("../models/User");
const bcyrpt = require("bcryptjs");

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

    // hash user password
    const salt = await bcrypt.genSalt(); // Asynchronously generates a salt.
    const hashedPass = await bcyrpt.hash(password, salt); // Asynchronously generates a hash for the given password.

    // create a new user
    const newUser = await User({
      username,
      email,
      password: hashedPass,
      role: role || "user",
    });

    await newUser.save();

    if (newUser) {
      return res.status(201).json({
        success: true,
        message: "User created successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User creation failed!!",
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
