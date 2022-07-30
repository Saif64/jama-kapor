const {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrders,
  getMonthlyIncome,
  getUserOrder,
} = require("../controller/orderController.js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, createOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);

// //GET ALL

router.get("/", verifyTokenAndAdmin, getOrders);

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;
