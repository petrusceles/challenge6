const auth = (req, res, next) => {
  const token = req.headers.auth;
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "No token provided",
    });
  }

  if (token != "secret") {
    return res.status(401).json({
      status: "error",
      message: "Invalid token",
    });
  } else {
    next();
  }
};

module.exports = auth;
