// register User
const registerUser = async (res, req) => {
  try {
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

module.exports = {loginUser, registerUser}
