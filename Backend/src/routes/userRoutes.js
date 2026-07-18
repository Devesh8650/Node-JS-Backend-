// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();

// Controllers ko import karna
const { getUsers, addUser } = require("../controllers/userController");

// URL aur Controller ko connect karna
router.get("/users", getUsers);
router.post("/adduser", addUser);

module.exports = router;