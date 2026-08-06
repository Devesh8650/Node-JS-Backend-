const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // String Validation Production Level Schema creatr using Validations
    required: [true, "Name is required"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [20, "Name cannot exceed 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    unique: true,
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    trim: true,
    enum: {
      values: ["Admin", "HR", "Student", "Instructor"],
      message: "{VALUE} is not a valid role",
    },
  },
  age: {
    type: Number,
    min: [18, "Age must be at least 18 years"],
    max: [60, "Age cannot be greater than 60 years"],
  },
  // SOFT DELETE USER KE LIYE
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
