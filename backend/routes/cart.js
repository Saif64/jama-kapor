const {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAll,
} = require("../controller/cartController.js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization);

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization);

// //GET ALL

router.get("/", verifyTokenAndAdmin);

module.exports = router;
