// Apna Model (Rulebook) import kar rahe hain (Nakli array hata diya)
const User = require("../models/userModel");
// get api Database se saare user lana
const getUsers = async (req, res) => {
  try {
    // user.find() MongoDB se saara data dhoondh kar le aayega
    const users = await User.find();
    res.json({
      success: true,
      totalUsers: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database Error",
      error: error.message,
    });
  }
}

  // POST API: Naya user MongoDB me save karna
  const addUser = async (req, res) => {
    try {
      const userData = req.body;
      // Database me naya data create karna aur save hone ka wait karna
      const newUser = await User.create(userData);
      res.json({
        success: true,
        message: "User successfully MongoDB me add ho gaya!",
        dataAdded: newUser,
      });
    } catch (error) {
      // Agar Schema ka rule toota (jaise name nahi bheja), toh ye error aayega
      res.status(400).json({
        success: false,
        message: "Data save nahi hua, rulebook (Schema) fail ho gaya!",
        error: error.message,
      });
    }
  }
module.exports ={getUsers,addUser}
