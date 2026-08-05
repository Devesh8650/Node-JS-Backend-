const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserPartially
} = require("../controllers/userController");

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.patch("/users/:id",updateUserPartially)

module.exports = router;
