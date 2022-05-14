const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the challenge4 API",
  });
});

const middleware = require("../middleware");

const user = require("./user");
router.use("/users", user);

const bio = require("./bio");
router.use("/bio", middleware.auth, bio);

const history = require("./history");
router.use("/histories", middleware.auth, history);

module.exports = router;
