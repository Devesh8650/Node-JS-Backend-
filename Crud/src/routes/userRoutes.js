const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserPartially,
  deleteUser,
  deleteUserSoft
} = require("../controllers/userController");

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.patch("/users/:id",updateUserPartially)
// router.delete("/users/:id",deleteUser)
router.delete("/users/:id",deleteUserSoft)


module.exports = router;
