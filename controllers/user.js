const { User } = require("../models");

createUser = async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        status: "Error",
        message: "Please fill all the fields",
        data: null,
      });
    }

    let newUser = await User.create({
      username,
      password,
    });

    return res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

getAllUser = async (req, res) => {
  try {
    let users = await User.findAll({ include: "bio" });

    return res.status(200).json({
      status: "Success",
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

getUser = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await User.findOne({
      include: "bio",
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "User not found",
        data: null,
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "User data retrieved successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let { username, password } = req.body;

    let user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "User not found",
        data: null,
      });
    }

    if (username) user.username = username;
    if (password) user.password = password;

    let updated = await user.update({
      username,
      password,
    });

    return res.status(200).json({
      status: "Success",
      message: "User updated successfully",
      data: updated,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: "Error",
        message: "User not found",
        data: null,
      });
    }

    await user.destroy();

    return res.status(200).json({
      status: "Success",
      message: "User deleted successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};
