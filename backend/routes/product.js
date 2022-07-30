const {
  createProduct,
  updatedProduct,
  deleteProduct,
  getProduct,
  getProducts,
} = require("../controller/productController.js");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updatedProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//GET PRODUCT
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getProducts);

module.exports = router;
