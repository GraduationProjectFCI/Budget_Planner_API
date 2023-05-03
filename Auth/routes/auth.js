const express = require("express");
const router = express.Router();

const {
  login,
  register,
  confirmation,
  validate,
  getUserData,
} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/confirmation", confirmation);
router.post("/validate", validate);

module.exports = router;
