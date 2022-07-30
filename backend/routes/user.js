const {
  getUser,
  getUsers,
  getUserStats,
  deleteUser,
  updateUser,
} = require("../controller/userController.js");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//GET ALL USER
router.get("/", verifyTokenAndAdmin, getUsers);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;
