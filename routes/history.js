const express = require("express");
const router = express.Router();

const {
  createHistory,
  getHistoryByUserId,
  updateHistory,
  deleteHistory,
} = require("../controllers/history");

router.post("/", createHistory);
router.get("/:id", getHistoryByUserId);
router.put("/:id", updateHistory);
router.delete("/:id", deleteHistory);

module.exports = router;
