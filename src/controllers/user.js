const User = require("../models/user.js");

// Gett all users in the database
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Create a new user with provided username, phone, and email.
exports.createUser = async (req, res) => {
  const { username, phone, email, identityCard } = req.body;
  try {
    const newUser = new User({ username, phone, email, identityCard });
    await newUser.save();
    res.status(200).json({ message: "Created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

//Update user information by ID.
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, phone, email } = req.body;
  try {
    // tìm user theo id
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    // cập nhật thông tin
    user.username = username;
    user.phone = phone;
    user.email = email;
    // lưu lại
    await user.save();
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Delete user by ID.
exports.deleteUserByID = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    await user.destroy();
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// look up user by identity Card
exports.getUserByIdentityCard = async (res, req) => {
  const { identityCard } = req.body;
  try {
    const user = await User.findOne({
      where: {
        identityCard: identityCard,
      },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
