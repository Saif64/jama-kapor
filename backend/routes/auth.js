const { registerUser, loginUser } = require("../controller/authController");

const router = require("express").Router();

//REGISTER
router.post("/register", registerUser);

//LOGIN

router.post("/login", loginUser);

module.exports = router;
