const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register User
const registerUser = async (req, res) => {
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
    const hashedPass = await bcrypt.hash(password, salt); // Asynchronously generates a hash for the given password.

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
      success: false,
      message: "Something went wrong!!",
    });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // if the current user exists or not
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    // if the pass is correct or not
    const isPass = await bcrypt.compare(password, user.password);
    if (!isPass) {
      return res.status(400).json({
        success: false,
        message: "Invalid password!",
      });
    }

    // if username and pass is correct, generate a token and paas the user info to it
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const userId = req.userInfo.userId;

    // extract old and new password
    const { oldPass, newPass } = req.body;

    // current logged in user
    const user = await User.findOne(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    // check old pass
    const isPassMatch = await bcrypt.compare(oldPass, user.password)
    if(!isPassMatch){
      return res.status(400).json({
        success : false,
        message : "Incorrect Password!"
      })
    }

    // hash the new password
    const salt = await bcrypt.genSalt(10)
    const newHashedPass = await bcrypt.hash(newPass, salt)

    // update user password
    user.password = newHashedPass
    await user.save()

    res.status(200).json({
      message : "Password changed successfully!",
      success : true
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false,
      message : "Something went wrong!!"
    })
  }
};

module.exports = { loginUser, registerUser, changePassword };
