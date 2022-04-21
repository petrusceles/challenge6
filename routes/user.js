const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const middleware = require("../middleware");

router.post("/", createUser);
router.get("/", middleware.auth, getAllUser);
router.get("/:id", middleware.auth, getUser);
router.put("/:id", middleware.auth, updateUser);
router.delete("/:id", middleware.auth, deleteUser);

module.exports = router;
