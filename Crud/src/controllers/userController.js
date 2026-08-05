const User = require("../models/userModel");
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "User Created Successfully!",
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// GET USER
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      totalUsers: users.length,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createUser,getUsers };
