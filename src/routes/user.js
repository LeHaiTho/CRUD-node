const express = require("express");
const {
  createUser,
  updateUser,
  deleteUserByID,
  getAllUsers,
  getUserByIdentityCard,
} = require("../controllers/user.js");

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.post("/users/filter", getUserByIdentityCard);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUserByID);
module.exports = router;
